import mongoose from 'mongoose'
import version from 'mongoose-version'


const modaSchema = new mongoose.Schema({
  //_version: { type: String, required: true, default: 1 },
  submittedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: { type: String, required: true },
  project: { type: String, required: true },
  fundingAgency: { type: String, required: false },
  grantNumberOrInformation: { type: String, required: false },
  projectHomePage: { type: String, required: false },
  userCase: { type: String, required: true },
  creationDate: { type: Date },
  //created: Date,
  modificationDate: { type: Date },
  //lastModified : Date,
  version: { type: String, required: true },
  author: {
    firstName: { type: String, required: true },
    familyName: { type: String, required: true },
    email: { type: String, required: true },
    affiliation: { type: String, required: true },
  },
  chainOfModels: {
    physicsBasedModels: [{
      title: String,
      userCaseAspects: {
        aspectsOfInterest: String,
        material: String,
        geometry: String,
        timeLapse: String,
        manufacturingProcessOrConditions: String,
        publications: String,
      },
      genericPhysics: {
        romm_pe: String,
        modelEntity: String,
        modelPE: {
          physicsEquations: [{
            equation: String,
            description: String,
          }],
          physicalQuantities: [{
            name: String,
            symbol: String,
            description: String,
          }],
        },
        materialRelations: {
          relations: [{
            name: String,
            symbol: String,
            description: String,
          }],
          descriptors: [{
            name: String,
            symbol: String,
            description: String,
          }],
        },
        simulatedInput: String,
      },
      solverSpecs: {
        numericalSolver: String,
        softwareTool: {
          name: String,
          version: String,
          website: String,
        },
        timeStepUnit: String,
        systemOfUnits: String,
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
      dbUserCase: {
        dbUserCaseAspects: String,
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
  tags : [String],
})

modaSchema.index({ "$**": "text" })

modaSchema.plugin(version/*, {strategy: 'collection'}*/)

export default mongoose.model('Moda', modaSchema)
