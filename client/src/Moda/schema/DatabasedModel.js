export default {
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
          "title": "2.0.2 Equation name",
          "description": "e.g. energy minimizer"
        },
        "database": {
          "type": "string",
          "title": "2.1.1 Database",
          "description": `e.g. thermodynamic database CALPHAD
  e.g. simulated data with DFT model and experimental data from AFM`
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
              "title": "2.2.1 Hypothesis",
              "description": "The hypothetical relation assumed"
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