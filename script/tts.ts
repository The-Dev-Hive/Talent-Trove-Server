import fs from "fs";
import path from "path";
import readline from "readline";

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for folder name
rl.question("Enter folder name: ", (folderName) => {
  const folderPath = process.cwd() + `/src/api/${folderName}`;

  // Check if the folder already exists
  if (fs.existsSync(folderPath)) {
    console.error(`Error: Folder "${folderName}" already exists.`);
    rl.close();
    return;
  }

  // Create the folder
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.error(`Error creating folder: ${err.message}`);
      rl.close();
      return;
    }

    const files = [
      `${folderName}.route.ts`,
      `${folderName}.validation.ts`,
      `${folderName}.service.ts`,
      `${folderName}.controller.ts`,
    ];

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      fs.writeFile(filePath, "", (err) => {
        if (err) {
          console.error(`Error creating file ${file}: ${err.message}`);
        }
      });
    });

    console.log("Congregations! Folder and files created successfully.");

    rl.close();
  });
});
