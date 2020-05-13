# DoDeno

Deno exploration project

## Problems

- Cannot find name `Deno`

- TypeScript errors:

```sh
error TS2339: Property 'errors' does not exist on type 'typeof Deno'.

► https://deno.land/std@0.50.0/textproto/mod.ts:80:24

80         throw new Deno.errors.InvalidData(
                          ~~~~~~
```

- VS Code: `Cannot find module X locally`

- Prettier formatiing in VS Code issues:
```sh 
[Error - 11:45:49] Request textDocument/formatting failed.
  Message: Request textDocument/formatting failed with message: Download https://deno.land/std@v0.29.0/prettier/main.ts
Import 'https://deno.land/std@v0.29.0/prettier/main.ts' failed: 404 Not Found
```

## Resources

https://github.com/denoland/deno/releases  
https://deno.land/typedoc

https://medium.com/@kitsonk/develop-with-deno-and-visual-studio-code-225ce7c5b1ba
https://marketplace.visualstudio.com/items?itemName=justjavac.vscode-deno