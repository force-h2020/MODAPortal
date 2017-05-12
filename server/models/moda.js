import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const modaSchema = new Schema({
  title: { type: String, required: true },
  project: { type: String, required: true },
  userCase: { type: String, required: true },
  creationDate: { type: Date },
  modificationDate: { type: Date },
  chainOfModels: {
    physicsBasedModels: [{
      title: String,
      cuds_type: String,
      userCaseAspects: {
        aspectsOfInterest: String,
        material: String,
        geometry: String,
        timeLapse: String,
        manufacturingProcessOrConditions: String,
        publications: String,
      },
      genericPhysics: {
        modelType: String,
        modelName: String,
        modelEntity: String,
        modelPE: {
          equation: String,
          physicalQuantities: [{
            name: String,
            description: String,
          }],
          materialRelations: {
            relation: String,
            descriptor: String,
          },
          simulatedInput: String,
        },
      },
      solverSpecs: {
        numbericalSolver: String,
        softwareTool: String,
        timeStep: String,
        computationalRepresentation: {
          physicsEquationCR: String,
          materialRelationsCR: String,
          materialCR: String,
        },
        computationalBoundaryConditions: String,
        additionalSolverParameters: String,
      },
      postProcessing: {
        processedOutput: String,
        methodologies: String,
        errorMargin: String,
      },
    }],
    databasedModels: [{
      userCase: {
        userCaseAspects: String,
        material: String,
        geometry: String,
        timeLapse: String,
        manufacturingProcessOrConditions: String,
        publications: String,
      },
      theDatabasedModel: {
        equationType: String,
        equationName: String,
        database: String,
        databaseType: String,
        equation: {
          hypothesis: String,
          physicalQuantities: String,
        },
      },
      computationalDetails: {
        numericalOperations: String,
        softwareTool: String,
        errorMargin: String,
      },
    }],
  },
  publications: { type: 'String', required: false },
  accessConditions: { type: 'String', required: false },
  workflowRationale: { type: 'String', required: false },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: false },
});

export default mongoose.model('Moda', modaSchema);
