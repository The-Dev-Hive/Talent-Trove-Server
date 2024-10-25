export const fileList = (folderName: string) => {
  return [
    {
      name: `${folderName}.route.ts`,
      content: `// route.ts`,
    },
    {
      name: `${folderName}.validation.ts`,
      content: "// zod validation",
    },
    {
      name: `${folderName}.service.ts`,
      content: "// service file ",
    },
    {
      name: `${folderName}.controller.ts`,
      content: "// controllers",
    },
  ];
};
