/* eslint-disable */
module.exports = {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://emmc.info/moda.json",
    "title": "MODA",
    "description": "Overview of a simulation",
    "type": "object",
    "required": [
      "title",
      "project",
      "userCase"
    ],
    "definitions": {
      "physicsBasedModel": {
        "type": "object",
        "properties": {
          "cuds_type": {
            "type": "string",
            "title": "Physics Equation According to the RoMM"
          },
          "userCaseAspects": {
            "type": "object",
            "title": "1. Aspect of the user-case/system to be simulated",
            "properties": {
              "aspectsOfInterest": {
                "type": "string",
                "title": "1.1 Aspects of the user case to be simulated"
              },
              "material": {
                "type": "string",
                "title": "1.2 Material"
              },
              "geometry": {
                "type": "string",
                "title": "1.3 Geometry"
              },
              "timeLapse": {
                "type": "string",
                "title": "1.4 Time lapse"
              },
              "manufacturingProcessOrConditions": {
                "type": "string",
                "title": "1.5 Manufacturing process or in-service conditions"
              },
              "publications": {
                "type": "string",
                "title": "1.6 Publication on this data"
              }
            }
          },
          "genericPhysics": {
            "type": "object",
            "title": "2. Generic physics of the model equation",
            "properties": {
              "modelType": {
                "type": "string",
                "title": "2.0.1 Model type"
              },
              "modelName": {
                "type": "string",
                "title": "2.0.2 Model name"
              },
              "modelEntity": {
                "type": "string",
                "title": "2.1 Model entity"
              },
              "modelPE": {
                "type": "object",
                "title": "2.2 Model physics/chemistery equation",
                "properties": {
                  "equation": {
                    "type": "string",
                    "title": "2.2.1 Equation"
                  },
                  "physicalQuantities": {
                    "type": "array",
                    "title": "2.2.2 Physical quantities",
                    "items": {
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string",
                          "title": "Name/symbol"
                        },
                        "description": {
                          "type": "string",
                          "title": "Description"
                        }
                      }
                    }
                  },
                  "materialRelations": {
                    "type": "object",
                    "title": "2.3 Material relations",
                    "properties": {
                      "relation": {
                        "type": "string",
                        "title": "2.3.1 Relation"
                      },
                      "descriptor": {
                        "type": "string",
                        "title": "2.3.2 Physical quantities/descriptors for each MR"
                      }
                    }
                  },
                  "simulatedInput": {
                    "type": "string",
                    "title": "2.4 Simulated input"
                  }
                }
              }
            }
          },
          "solverSpecs": {
            "type": "object",
            "title": "3. Solver and computational translation of the specifications",
            "properties": {
              "numbericalSolver": {
                "type": "string",
                "title": "3.1 Numberical solver"
              },
              "softwareTool": {
                "type": "string",
                "title": "3.2 Software Tool"
              },
              "timeStep": {
                "type": "string",
                "title": "3.3 Time step"
              },
              "computationalRepresentation": {
                "type": "object",
                "title": "3.4 Computational representation (CR)",
                "properties": {
                  "physicsEquationCR": {
                    "type": "string",
                    "title": "3.4.1 Physics equation CR"
                  },
                  "materialRelationsCR": {
                    "type": "string",
                    "title": "3.4.2 Material relations CR"
                  },
                  "materialCR": {
                    "type": "string",
                    "title": "3.4.3 Material CR"
                  }
                }
              },
              "computationalBoundaryConditions": {
                "type": "string",
                "title": "3.5 Computational boundary conditions"
              },
              "additionalSolverParameters": {
                "type": "string",
                "title": "3.6 Additional solver parameters"
              }
            }
          },
          "postProcessing": {
            "type": "object",
            "title": "4. Post processing",
            "properties": {
              "processedOutput": {
                "type": "string",
                "title": "4.1 Processed Output"
              },
              "methodologies": {
                "type": "string",
                "title": "4.2 Methodologies"
              },
              "errorMargin": {
                "type": "string",
                "title": "4.3 Margin of Error"
              }
            }
          }
        }
      },
      "databasedModel": {
        "type": "object",
        "properties": {
          "dbUserCase": {
            "type": "object",
            "title": "1. User case",
            "properties": {
              "dbUserCaseAspects": {
                "type": "string",
                "title": "1.1 Aspects of the user case to be calculated"
              },
              "material": {
                "type": "string",
                "title": "1.2 Material"
              },
              "geometry": {
                "type": "string",
                "title": "1.3 Geometry"
              },
              "timeLapse": {
                "type": "string",
                "title": "1.4 Time lapse"
              },
              "manufacturingProcessOrConditions": {
                "type": "string",
                "title": "1.5 Manufacturing process or in-service conditions"
              },
              "publications": {
                "type": "string",
                "title": "1.6 Publication on this one datamining operation"
              }
            }
          },
          "theDatabasedModel": {
            "type": "object",
            "title": "2. The databased model",
            "properties": {
              "equationType": {
                "type": "string",
                "title": "2.0.1 Equation type"
              },
              "equationName": {
                "type": "string",
                "title": "2.0.2 Equation name"
              },
              "database": {
                "type": "string",
                "title": "2.1.1 Database"
              },
              "databaseType": {
                "type": "string",
                "title": "2.1.2 Database type"
              },
              "equation": {
                "type": "object",
                "title": "2.2 Equation",
                "properties": {
                  "hypothesis": {
                    "type": "string",
                    "title": "2.2.1 Hypothesis"
                  },
                  "physicalQuantities": {
                    "type": "string",
                    "title": "2.2.2 Physical quantities"
                  }
                }
              }
            }
          },
          "computationalDetails": {
            "type": "object",
            "title": "3. Computational detail of datamining operation",
            "properties": {
              "numericalOperations": {
                "type": "string",
                "title": "3.1 Numberical operations"
              },
              "softwareTool": {
                "type": "string",
                "title": "3.2 Sofware tool"
              },
              "errorMargin": {
                "type": "string",
                "title": "3.3 Margin of error"
              }
            }
          }
        }
      }
    },
    "properties": {
      "userCase": {
        "type": "string",
        "title": "User Case"
      },
      "title": {
        "type": "string",
        "title": "Title",
      },
      "project": {
        "type": "string",
        "title": "Project",
        "default": "",
        "description": ""
      },
      "chainOfModels": {
        "type": "object",
        "title": "Chain of Models",
        "properties": {
          "physicsBasedModels": {
            "type": "array",
            "title": "Physics-based Models",
            "items": {
              "$ref": "#/definitions/physicsBasedModel"
            },
          },
          "databasedModels": {
            "type": "array",
            "title": "Databased Models",
            "items": {
              "$ref": "#/definitions/databasedModel"
            }
          }
        }
      },
      "publications": {
        "type": "string",
        "title": "Publication - peer reviewing the data"
      },
      "accessConditions": {
        "type": "string",
        "title": "Access conditions"
      },
      "workflowRationale": {
        "type": "string",
        "title": "Textual description of the Workflow and its rationale"
      },
      "creationDate": {
        "type": "string",
        "format": "date-time",
        "title": "Creation date"
      },
      "modificationDate": {
        "type": "string",
        "format": "date-time",
        "title": "Modification date"
      }
    }
  },
  "uiSchema": {
    "classNames": "moda-overview",
    "ui:order": [
      "title",
      "project",
      "userCase",
      "publications",
      "accessConditions",
      "workflowRationale",
      "creationDate",
      "modificationDate",
      "chainOfModels"
    ],
    "creationDate": {
      "ui:readonly": "true"
    },
    "modificationDate": {
      "ui:readonly": "true"
    },
    "title": {
      "classNames": "moda-title",
      "ui:help": ""
    },
    "project": {
      "classNames": "moda-project",
      "ui:help": ""
    },
    "userCase": {
      "classNames": "user-case",
      "ui:widget": "textarea",
      "ui:help": "Explain the user-case"
    },
    "publications": {
      "classNames": "publications",
      "ui:widget": "textarea"
    },
    "accessConditions": {
      "classNames": "access-conditions",
      "ui:widget": "textarea"
    },
    "workflowRationale": {
      "classNames": "workflow-rationale",
      "ui:widget": "textarea"
    },
    "chainOfModels": {
      "classNames": "chain-of-models",
      "physicsBasedModels": {
        "classNames": "physics-based-models",
        "items": {
          "cuds_type": {
            "classNames": "cuds_type",
            "ui:widget": "cudstreeselect"
          },
          "userCaseAspects": {
            "classNames": "user-case-aspects",
            "aspectsOfInterest": {
              "ui:widget": "textarea"
            }
          },
          "genericPhysics": {
            "classNames": "generic-physics",
            "aspectsOfInterest": {
              "ui:widget": "textarea"
            }
          },
          "solverSpecs": {
            "classNames": "solver-specs",
            "aspectsOfInterest": {
              "ui:widget": "textarea"
            },
            "computationalRepresentation": {
              "physicsEquationCR": {
                "ui:widget": "textarea"
              }
            },
          },
          "postProcessing": {
            "classNames": "post-processing",
            "aspectsOfInterest": {
              "ui:widget": "textarea"
            }
          }
        }
      },
      "databasedModels": {
        "classNames": "data-based-models",
        "items": {
          "dbUserCase": {
            "classNames": "user-case",
            "ui:widget": "textarea"
          },
          "theDatabasedModel": {
            "classNames": "the-databased-model",
            "ui:widget": "textarea"
          },
          "computationalDetails": {
            "classNames": "computational-details",
            "ui:widget": "textarea"
          }
        }
      }
    }
  }
};
