const obj: unknown = {};

// Ensure that obj is object | null (gee, thanks JavaScript)
if (typeof obj !== "object") throw new Error();

obj;
//^?

// Remove null from the union
if (!obj) throw new Error();

obj;
//^?

// Grab 'message' from obj
if ("message" in obj) {
  // Property 'message' does not exist on type 'object'.(2339)
  obj.message;
}
