/**
 * EXERCISE:
 * Imagine the canWrite and canRead functions below are the public API of your Posts module
 * Follow the examples on following comments to complete the exercises
 */
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

  console.log("Saving post...", updatedPost);

  return updatedPost;
}

// TODO: create mock object to use in your tests; use the following interfaces
// to create your objects, e.g.: const userA = { id: 123, name: 'Test', roles: ['WRITER'] }

// interface User {
//   id: number;
//   name: string;
//   roles: string[];
// }
// interface Post {
//   id: number;
//   name: string;
//   userIds: string[];
//   isPublished: boolean;
//   isDeleted: boolean;
// }

describe("Posts", () => {
  // TODO write the tests cases, here are some examples of tests you can write:
  // - Check if the received post has the expected structure
  // - Test if a given user can write to a post, e.g.:
  //    - Has the right roles
  //    - The post is not deleted
  //    - Test negative scenarios as well: the user doesn't have required roles
  //      or it doesn't belong to a given user
  // - Test if a user can read a post, e.g.:
  //    - The user is associated with the post
  //    - The post is not deleted
  //    - The post is published
  // - Test the updatePost function, e.g.:
  //    - Throws if user doesn't have permissions
  //    - The returned post has the expected modifications
  //    - Handle the async function
  // it("allows a user to write a post", () => {});
});
