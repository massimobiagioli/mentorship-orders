import fs from "fs";
import path from "path";

const workflowFolderName = "n8n_workflows";
const workflowFolder = path.resolve(".", workflowFolderName);

const createWorkflowRepository = () => {
  return {
    getAll: async () => {
      const filenames = fs.readdirSync(workflowFolder);

      return filenames.map((name) => {
        const workflowPath = path.join("/", workflowFolder, name);
        const workflow = JSON.parse(fs.readFileSync(workflowPath));

        return {
          id: workflow.id,
          name: workflow.name,
        };
      });
    },
  };
};

export default createWorkflowRepository;
