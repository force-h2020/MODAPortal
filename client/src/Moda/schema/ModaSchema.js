/* eslint-disable */
import physicsBasedModels from './PhysicsBasedModel'
import databasedModel from './DatabasedModel'
import descriptions from './ModaFieldDescriptions'

export default {
  "schema": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://emmc.info/moda.json",
    "title": "MODA",
    "description": "Overview of a simulation",
    "type": "object",
    "required": [
      "title",
      "project",
      "fundingAgency",
      "grantNumberOrInformation",
      "projectHomePage",
      "userCase",
      "version"
    ],

    "definitions": {
      "RoMMVersion": {
        "type": "string",
        "enum": [
          "Version 2"
        ]
      },
      "physicsBasedModel": physicsBasedModels,
      "databasedModel": databasedModel,
    },

/*****************************
Top Level Properties
******************************/

    "properties": {
      "userCase": {
        "type": "string",
        "title": "User Case",
        "description": `General description of the User Case. 

Please give the properties and behaviour of the particular material, manufacturing process and/or in-service-behaviour to be simulated.
No information on the modelling should appear here. The idea is that this user-case can also be simulated by others with other models and that the results can then be compared.`,
      },
      "title": {
        "type": "string",
        "title": "Title",
      },
      "author": {
        "type": "object",
        "title": "Author",
        "required": [
          "firstName",
          "familyName",
          "email",
          "affiliation"
        ],
        "properties": {
          "firstName": {
            "type": "string",
            "title": "First name"
          },
          "familyName": {
            "type": "string",
            "title": "Last name"
          },
          "email": {
            "type": "string",
            "title": "Email address"
          },
          "affiliation": {
            "type": "string",
            "title": "Affiliation"
          }
        }
      },
      "version": {
        "type": "string",
        "title": "RoMM Version",
        "enum": ["6"],
        "enumNames": ["Version 6"]
      },
      "project": {
        "type": "string",
        "title": "Project",
        "default": "",
        "description": ""
      },
      "fundingAgency": {
        "type": "string",
        "title": "Funding agency",
        "default": "",
        "description": ""
      },
      "grantNumberOrInformation": {
        "type": "string",
        "title": "Grant number or information",
        "default": "",
        "description": ""
      },
      "projectHomePage": {
        "type": "string",
        "title": "Project home page",
        "default": "",
        "description": ""
      },

/*****************************
Chain of Models Property
******************************/

      "chainOfModels": {
        "type": "object",
        "title": "Chain of Models",
        "description": descriptions.chainOfModels,

        "properties": {
          "physicsBasedModels": {
            "type": "array",
            "title": "Physics-based Models",
            "items": {
              "$ref": "#/definitions/physicsBasedModel"
            },
            "description": descriptions.physicsBasedModels,
          },
          "databasedModels": {
            "type": "array",
            "title": "Databased Models [work in progress]",
            "items": {
              "$ref": "#/definitions/databasedModel"
            },
            "description": descriptions.databasedModels,
          }
        }
      },
      "publications": {
        "type": "string",
        "title": "Publication - peer reviewing the data",
        "description": `Please give the publication which documents the data of this ONE simulation.

This article should ensure the quality of this data set (and not only the quality of the models).`
      },
      "accessConditions": {
        "type": "string",
        "title": "Access conditions",
        "description": `Please list whether the model and/or data are free, commercial or open source. Please list the owner and the name of the software or database (include a web link if available).`
      },
      "workflowRationale": {
        "type": "string",
        "title": "Textual description of the Workflow and its rationale",
        "description": `Please give a textual rationale of why you as a modeller have chosen these models and this workflow, knowing other modellers would simulate the same end-user case differently.

This should include the reason why a particular aspect of the user case is to be simulated with a particular model.`
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
  }
}
