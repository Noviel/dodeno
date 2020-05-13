const [errors, emitted] = await Deno.compile("main.ts", undefined, {
  lib: ["dom", "esnext"],
  outDir: "dist",
});

if (errors) {
  console.log("There was an error:");
  console.error(errors);
} else {
  console.log(emitted);
}