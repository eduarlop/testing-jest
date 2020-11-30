const userA = {
  id: 123,
  name: "User A",
  roles: ["WRITER", "MODERATOR"]
};

const userB = {
  id: 456,
  name: "User B",
  roles: ["READER"]
};

const userC = {
  id: 789,
  name: "User C",
  roles: ["READER"]
};

const publishedPost = {
  id: "abc",
  name: "Published post",
  userIds: [123, 456],
  isPublished: true,
  isDeleted: false
};

const unpublishedPost = {
  id: "def",
  name: "Unpublished post",
  userIds: [123],
  isPublished: false,
  isDeleted: false
};

const deletedPost = {
  id: "def",
  name: "Deleted post",
  userIds: [123],
  isPublished: false,
  isDeleted: true
};

function canWrite(post, user) {
  if (post.isDeleted) {
    return false;
  }
  return post.userIds.includes(user.id) && user.roles.includes("WRITER");
}

function canRead(post, user) {
  if (post.isDeleted || !post.isPublished) {
    return false;
  }
  return post.userIds.includes(user.id);
}

async function updatePost(post, user, newName) {
  if (!canWrite(post, user)) {
    throw new Error("User does not have permissions to write this post");
  }
  const updatedPost = { ...post, name: newName };

  window.console.log("Post updated!", updatedPost);

  return updatedPost;
}

describe("Posts", () => {
  it("has the expected structure", () => {
    expect(publishedPost).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      userIds: expect.arrayContaining([expect.any(Number)]),
      isPublished: expect.any(Boolean),
      isDeleted: expect.any(Boolean)
    });
  });

  describe("canWrite", () => {
    it("allows writing if post belongs to a user with WRITER role", () => {
      const result = canWrite(publishedPost, userA);

      expect(result).toBeTruthy();
    });

    it("does not allows writing if post belongs to a user without WRITER role", () => {
      const result = canWrite(publishedPost, userC);

      expect(result).toBeFalsy();
    });

    it("does not allows writing if post does not belongs to a user", () => {
      const result = canWrite(publishedPost, userC);

      expect(result).toBeFalsy();
    });

    it("does not allows writing a post if it is deleted", () => {
      const result = canWrite(deletedPost, userA);

      expect(result).toBeFalsy();
    });

    it("allows writing a post even if it is not published", () => {
      const result = canWrite(unpublishedPost, userA);

      expect(result).toBeTruthy();
    });
  });

  describe("canRead", () => {
    it("allows reading if post belongs to a user", () => {
      const result = canRead(publishedPost, userB);

      expect(result).toBeTruthy();
    });

    it("does not allows reading if post does not belongs to a user", () => {
      const result = canRead(publishedPost, userC);

      expect(result).toBeFalsy();
    });

    it("does not allows reading a post if it is deleted", () => {
      const result = canRead(deletedPost, userB);

      expect(result).toBeFalsy();
    });

    it("does not allows reading a post if it is not published", () => {
      const result = canRead(unpublishedPost, userB);

      expect(result).toBeFalsy();
    });
  });

  describe("updatePost", () => {
    const mockedConsole = { log: jest.fn() };
    let originalConsole;

    beforeAll(() => {
      originalConsole = window.console;
      window.console = mockedConsole;
    });
    afterAll(() => {
      window.console = originalConsole;
    });

    it("updates the post with the new name", async () => {
      const updatedPost = await updatePost(
        publishedPost,
        userA,
        "New post name"
      );

      expect(updatedPost.name).toBe("New post name");
      expect(mockedConsole.log).toHaveBeenCalledWith(
        "Post updated!",
        updatedPost
      );
    });

    it("throws error if user does not have write permissions", async () => {
      expect(
        updatePost(publishedPost, userB, "New post name")
      ).rejects.toThrow();
    });
  });
});
