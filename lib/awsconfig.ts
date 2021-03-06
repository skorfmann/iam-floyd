import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service config
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awsconfig.html
 */
export class Config extends PolicyStatement {
  public servicePrefix = 'config';
  public actions : Actions = {
    "BatchGetAggregateResourceConfig": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetAggregateResourceConfig.html",
      "description": "Returns the current configuration items for resources that are present in your AWS Config aggregator",
      "accessLevel": "Read",
      "resourceTypes": {
        "ConfigurationAggregator": {
          "required": true
        }
      }
    },
    "BatchGetResourceConfig": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetResourceConfig.html",
      "description": "Returns the current configuration for one or more requested resources",
      "accessLevel": "Read"
    },
    "DeleteAggregationAuthorization": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteAggregationAuthorization.html",
      "description": "Deletes the authorization granted to the specified configuration aggregator account in a specified region",
      "accessLevel": "Write",
      "resourceTypes": {
        "AggregationAuthorization": {
          "required": true
        }
      }
    },
    "DeleteConfigRule": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigRule.html",
      "description": "Deletes the specified AWS Config rule and all of its evaluation results",
      "accessLevel": "Write",
      "resourceTypes": {
        "ConfigRule": {
          "required": true
        }
      }
    },
    "DeleteConfigurationAggregator": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationAggregator.html",
      "description": "Deletes the specified configuration aggregator and the aggregated data associated with the aggregator",
      "accessLevel": "Write",
      "resourceTypes": {
        "ConfigurationAggregator": {
          "required": true
        }
      }
    },
    "DeleteConfigurationRecorder": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationRecorder.html",
      "description": "Deletes the configuration recorder",
      "accessLevel": "Write"
    },
    "DeleteConformancePack": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConformancePack.html",
      "description": "Deletes the specified conformance pack and all the AWS Config rules and all evaluation results within that conformance pack.",
      "accessLevel": "Write"
    },
    "DeleteDeliveryChannel": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteDeliveryChannel.html",
      "description": "Deletes the delivery channel",
      "accessLevel": "Write"
    },
    "DeleteEvaluationResults": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteEvaluationResults.html",
      "description": "Deletes the evaluation results for the specified Config rule",
      "accessLevel": "Write",
      "resourceTypes": {
        "ConfigRule": {
          "required": true
        }
      }
    },
    "DeleteOrganizationConfigRule": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConfigRule.html",
      "description": "Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization.",
      "accessLevel": "Write"
    },
    "DeleteOrganizationConformancePack": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConformancePack.html",
      "description": "Deletes the specified organization conformance pack and all of its evaluation results from all member accounts in that organization.",
      "accessLevel": "Write"
    },
    "DeletePendingAggregationRequest": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeletePendingAggregationRequest.html",
      "description": "Deletes pending authorization requests for a specified aggregator account in a specified region",
      "accessLevel": "Write"
    },
    "DeleteRemediationConfiguration": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationConfiguration.html",
      "description": "Deletes the remediation configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "RemediationConfiguration": {
          "required": true
        }
      }
    },
    "DeleteRemediationExceptions": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationExceptions.html",
      "description": "Deletes one or more remediation exceptions for specific resource keys for a specific AWS Config Rule.",
      "accessLevel": "Write"
    },
    "DeleteRetentionConfiguration": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRetentionConfiguration.html",
      "description": "Deletes the retention configuration",
      "accessLevel": "Write"
    },
    "DeliverConfigSnapshot": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DeliverConfigSnapshot.html",
      "description": "Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel",
      "accessLevel": "Read"
    },
    "DescribeAggregateComplianceByConfigRules": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregateComplianceByConfigRules.html",
      "description": "Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules",
      "accessLevel": "List",
      "resourceTypes": {
        "ConfigurationAggregator": {
          "required": true
        }
      }
    },
    "DescribeAggregationAuthorizations": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregationAuthorizations.html",
      "description": "Returns a list of authorizations granted to various aggregator accounts and regions",
      "accessLevel": "List"
    },
    "DescribeComplianceByConfigRule": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByConfigRule.html",
      "description": "Indicates whether the specified AWS Config rules are compliant",
      "accessLevel": "List",
      "resourceTypes": {
        "ConfigRule": {
          "required": true
        }
      }
    },
    "DescribeComplianceByResource": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByResource.html",
      "description": "Indicates whether the specified AWS resources are compliant",
      "accessLevel": "List"
    },
    "DescribeConfigRuleEvaluationStatus": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRuleEvaluationStatus.html",
      "description": "Returns status information for each of your AWS managed Config rules",
      "accessLevel": "List",
      "resourceTypes": {
        "ConfigRule": {
          "required": true
        }
      }
    },
    "DescribeConfigRules": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRules.html",
      "description": "Returns details about your AWS Config rules",
      "accessLevel": "List",
      "resourceTypes": {
        "ConfigRule": {
          "required": true
        }
      }
    },
    "DescribeConfigurationAggregatorSourcesStatus": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregatorSourcesStatus.html",
      "description": "Returns status information for sources within an aggregator",
      "accessLevel": "List",
      "resourceTypes": {
        "ConfigurationAggregator": {
          "required": true
        }
      }
    },
    "DescribeConfigurationAggregators": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregators.html",
      "description": "Returns the details of one or more configuration aggregators",
      "accessLevel": "List"
    },
    "DescribeConfigurationRecorderStatus": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html",
      "description": "Returns the current status of the specified configuration recorder",
      "accessLevel": "List"
    },
    "DescribeConfigurationRecorders": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html",
      "description": "Returns the name of one or more specified configuration recorders",
      "accessLevel": "List"
    },
    "DescribeConformancePackCompliance": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackCompliance.html",
      "description": "Returns compliance information for each rule in that conformance pack.",
      "accessLevel": "Read"
    },
    "DescribeConformancePackStatus": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackStatus.html",
      "description": "Provides one or more conformance packs deployment status.",
      "accessLevel": "Read"
    },
    "DescribeConformancePacks": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePacks.html",
      "description": "Returns a list of one or more conformance packs.",
      "accessLevel": "Read"
    },
    "DescribeDeliveryChannelStatus": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannelStatus.html",
      "description": "Returns the current status of the specified delivery channel",
      "accessLevel": "List"
    },
    "DescribeDeliveryChannels": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannels.html",
      "description": "Returns details about the specified delivery channel",
      "accessLevel": "List"
    },
    "DescribeOrganizationConfigRuleStatuses": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRuleStatuses.html",
      "description": "Provides organization config rule deployment status for an organization.",
      "accessLevel": "Read"
    },
    "DescribeOrganizationConfigRules": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRules.html",
      "description": "Returns a list of organization config rules.",
      "accessLevel": "Read"
    },
    "DescribeOrganizationConformancePackStatuses": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePackStatuses.html",
      "description": "Provides organization conformance pack deployment status for an organization.",
      "accessLevel": "Read"
    },
    "DescribeOrganizationConformancePacks": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePacks.html",
      "description": "Returns a list of organization conformance packs.",
      "accessLevel": "Read"
    },
    "DescribePendingAggregationRequests": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribePendingAggregationRequests.html",
      "description": "Returns a list of all pending aggregation requests",
      "accessLevel": "List"
    },
    "DescribeRemediationConfigurations": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationConfigurations.html",
      "description": "Returns the details of one or more remediation configurations",
      "accessLevel": "List",
      "resourceTypes": {
        "RemediationConfiguration": {
          "required": true
        }
      }
    },
    "DescribeRemediationExceptions": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExceptions.html",
      "description": "Returns the details of one or more remediation exceptions.",
      "accessLevel": "List"
    },
    "DescribeRemediationExecutionStatus": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExecutionStatus.html",
      "description": "Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps and any error messages for steps that have failed",
      "accessLevel": "List",
      "resourceTypes": {
        "RemediationConfiguration": {
          "required": true
        }
      }
    },
    "DescribeRetentionConfigurations": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRetentionConfigurations.html",
      "description": "Returns the details of one or more retention configurations",
      "accessLevel": "List"
    },
    "GetAggregateComplianceDetailsByConfigRule": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateComplianceDetailsByConfigRule.html",
      "description": "Returns the evaluation results for the specified AWS Config rule for a specific resource in a rule",
      "accessLevel": "Read",
      "resourceTypes": {
        "ConfigurationAggregator": {
          "required": true
        }
      }
    },
    "GetAggregateConfigRuleComplianceSummary": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateConfigRuleComplianceSummary.html",
      "description": "Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator",
      "accessLevel": "Read",
      "resourceTypes": {
        "ConfigurationAggregator": {
          "required": true
        }
      }
    },
    "GetAggregateDiscoveredResourceCounts": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateDiscoveredResourceCounts.html",
      "description": "Returns the resource counts across accounts and regions that are present in your AWS Config aggregator",
      "accessLevel": "Read",
      "resourceTypes": {
        "ConfigurationAggregator": {
          "required": true
        }
      }
    },
    "GetAggregateResourceConfig": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateResourceConfig.html",
      "description": "Returns configuration item that is aggregated for your specific resource in a specific source account and region",
      "accessLevel": "Read",
      "resourceTypes": {
        "ConfigurationAggregator": {
          "required": true
        }
      }
    },
    "GetComplianceDetailsByConfigRule": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByConfigRule.html",
      "description": "Returns the evaluation results for the specified AWS Config rule",
      "accessLevel": "Read",
      "resourceTypes": {
        "ConfigRule": {
          "required": true
        }
      }
    },
    "GetComplianceDetailsByResource": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html",
      "description": "Returns the evaluation results for the specified AWS resource",
      "accessLevel": "Read"
    },
    "GetComplianceSummaryByConfigRule": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByConfigRule.html",
      "description": "Returns the number of AWS Config rules that are compliant and noncompliant, up to a maximum of 25 for each",
      "accessLevel": "Read"
    },
    "GetComplianceSummaryByResourceType": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByResourceType.html",
      "description": "Returns the number of resources that are compliant and the number that are noncompliant",
      "accessLevel": "Read"
    },
    "GetConformancePackComplianceDetails": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceDetails.html",
      "description": "Returns compliance details of a conformance pack for all AWS resources that are monitered by conformance pack.",
      "accessLevel": "Read"
    },
    "GetConformancePackComplianceSummary": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceSummary.html",
      "description": "Provides compliance summary for one or more conformance packs.",
      "accessLevel": "Read"
    },
    "GetDiscoveredResourceCounts": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetDiscoveredResourceCounts.html",
      "description": "Returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in this region for your AWS account",
      "accessLevel": "Read"
    },
    "GetOrganizationConfigRuleDetailedStatus": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConfigRuleDetailedStatus.html",
      "description": "Returns detailed status for each member account within an organization for a given organization config rule.",
      "accessLevel": "Read"
    },
    "GetOrganizationConformancePackDetailedStatus": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConformancePackDetailedStatus.html",
      "description": "Returns detailed status for each member account within an organization for a given organization conformance pack.",
      "accessLevel": "Read"
    },
    "GetResourceConfigHistory": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceConfigHistory.html",
      "description": "Returns a list of configuration items for the specified resource",
      "accessLevel": "Read"
    },
    "ListAggregateDiscoveredResources": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_ListAggregateDiscoveredResources.html",
      "description": "Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions",
      "accessLevel": "List",
      "resourceTypes": {
        "ConfigurationAggregator": {
          "required": true
        }
      }
    },
    "ListDiscoveredResources": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_ListDiscoveredResources.html",
      "description": "Accepts a resource type and returns a list of resource identifiers for the resources of that type",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_ListTagsForResource.html",
      "description": "List the tags for AWS Config resource",
      "accessLevel": "List",
      "resourceTypes": {
        "AggregationAuthorization": {
          "required": false
        },
        "ConfigRule": {
          "required": false
        },
        "ConfigurationAggregator": {
          "required": false
        }
      }
    },
    "PutAggregationAuthorization": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_PutAggregationAuthorization.html",
      "description": "Authorizes the aggregator account and region to collect data from the source account and region",
      "accessLevel": "Write",
      "resourceTypes": {
        "AggregationAuthorization": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PutConfigRule": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html",
      "description": "Adds or updates an AWS Config rule for evaluating whether your AWS resources comply with your desired configurations",
      "accessLevel": "Write",
      "resourceTypes": {
        "ConfigRule": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PutConfigurationAggregator": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationAggregator.html",
      "description": "Creates and updates the configuration aggregator with the selected source accounts and regions",
      "accessLevel": "Write",
      "resourceTypes": {
        "ConfigurationAggregator": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "PutConfigurationRecorder": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html",
      "description": "Creates a new configuration recorder to record the selected resource configurations",
      "accessLevel": "Write"
    },
    "PutConformancePack": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html",
      "description": "Creates or updates a conformance pack.",
      "accessLevel": "Write"
    },
    "PutDeliveryChannel": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_PutDeliveryChannel.html",
      "description": "Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic",
      "accessLevel": "Write"
    },
    "PutEvaluations": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_PutEvaluations.html",
      "description": "Used by an AWS Lambda function to deliver evaluation results to AWS Config",
      "accessLevel": "Write"
    },
    "PutOrganizationConfigRule": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html",
      "description": "Adds or updates organization config rule for your entire organization evaluating whether your AWS resources comply with your desired configurations.",
      "accessLevel": "Write"
    },
    "PutOrganizationConformancePack": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html",
      "description": "Adds or updates organization conformance pack for your entire organization evaluating whether your AWS resources comply with your desired configurations.",
      "accessLevel": "Write"
    },
    "PutRemediationConfigurations": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationConfigurations.html",
      "description": "Adds or updates the remediation configuration with a specific AWS Config rule with the selected target or action",
      "accessLevel": "Write",
      "resourceTypes": {
        "RemediationConfiguration": {
          "required": true
        }
      }
    },
    "PutRemediationExceptions": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationExceptions.html",
      "description": "Adds or updates remediation exceptions for specific resources for a specific AWS Config rule.",
      "accessLevel": "Write"
    },
    "PutRetentionConfiguration": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_PutRetentionConfiguration.html",
      "description": "Creates and updates the retention configuration with details about retention period (number of days) that AWS Config stores your historical information",
      "accessLevel": "Write"
    },
    "SelectAggregateResourceConfig": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_SelectAggregateResourceConfig.html",
      "description": "Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of AWS resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.",
      "accessLevel": "Read"
    },
    "SelectResourceConfig": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_SelectResourceConfig.html",
      "description": "Accepts a structured query language (SQL) SELECT command, performs the corresponding search, and returns resource configurations matching the properties",
      "accessLevel": "Read"
    },
    "StartConfigRulesEvaluation": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigRulesEvaluation.html",
      "description": "Evaluates your resources against the specified Config rules",
      "accessLevel": "Write",
      "resourceTypes": {
        "ConfigRule": {
          "required": true
        }
      }
    },
    "StartConfigurationRecorder": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigurationRecorder.html",
      "description": "Starts recording configurations of the AWS resources you have selected to record in your AWS account",
      "accessLevel": "Write"
    },
    "StartRemediationExecution": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_StartRemediationExecution.html",
      "description": "Runs an on-demand remediation for the specified AWS Config rules against the last known remediation configuration",
      "accessLevel": "Write",
      "resourceTypes": {
        "RemediationConfiguration": {
          "required": true
        }
      }
    },
    "StopConfigurationRecorder": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html",
      "description": "Stops recording configurations of the AWS resources you have selected to record in your AWS account",
      "accessLevel": "Write"
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_TagResource.html",
      "description": "Associates the specified tags to a resource with the specified resourceArn",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "AggregationAuthorization": {
          "required": false
        },
        "ConfigRule": {
          "required": false
        },
        "ConfigurationAggregator": {
          "required": false
        },
        "ConformancePack": {
          "required": false
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/config/latest/APIReference/API_UntagResource.html",
      "description": "Deletes specified tags from a resource",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "AggregationAuthorization": {
          "required": false
        },
        "ConfigRule": {
          "required": false
        },
        "ConfigurationAggregator": {
          "required": false
        },
        "ConformancePack": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    }
  };
  public resourceTypes : ResourceTypes = {
    "AggregationAuthorization": {
      "name": "AggregationAuthorization",
      "arn": "arn:${Partition}:config:${Region}:${Account}:aggregation-authorization/${AggregatorAccount}/${AggregatorRegion}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ConfigurationAggregator": {
      "name": "ConfigurationAggregator",
      "arn": "arn:${Partition}:config:${Region}:${Account}:config-aggregator/${AggregatorId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ConfigRule": {
      "name": "ConfigRule",
      "arn": "arn:${Partition}:config:${Region}:${Account}:config-rule/${ConfigRuleId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ConformancePack": {
      "name": "ConformancePack",
      "arn": "arn:${Partition}:config:${Region}:${Account}:conformance-pack/${ConformancePackName}/${ConformancePackId}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "OrganizationConfigRule": {
      "name": "OrganizationConfigRule",
      "arn": "arn:${Partition}:config:${Region}:${Account}:organization-config-rule/${OrganizationConfigRuleId}",
      "conditionKeys": []
    },
    "OrganizationConformancePack": {
      "name": "OrganizationConformancePack",
      "arn": "arn:${Partition}:config:${Region}:${Account}:organization-conformance-pack/${OrganizationConformancePackId}",
      "conditionKeys": []
    },
    "RemediationConfiguration": {
      "name": "RemediationConfiguration",
      "arn": "arn:${Partition}:config:${Region}:${Account}:remediation-configuration/${RemediationConfigurationId}",
      "conditionKeys": []
    }
  };

  /**
   * Returns the current configuration items for resources that are present in your AWS Config aggregator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetAggregateResourceConfig.html
   */
  public batchGetAggregateResourceConfig () {
    this.add('config:BatchGetAggregateResourceConfig');
    return this;
  }

  /**
   * Returns the current configuration for one or more requested resources
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_BatchGetResourceConfig.html
   */
  public batchGetResourceConfig () {
    this.add('config:BatchGetResourceConfig');
    return this;
  }

  /**
   * Deletes the authorization granted to the specified configuration aggregator account in a specified region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteAggregationAuthorization.html
   */
  public deleteAggregationAuthorization () {
    this.add('config:DeleteAggregationAuthorization');
    return this;
  }

  /**
   * Deletes the specified AWS Config rule and all of its evaluation results
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigRule.html
   */
  public deleteConfigRule () {
    this.add('config:DeleteConfigRule');
    return this;
  }

  /**
   * Deletes the specified configuration aggregator and the aggregated data associated with the aggregator
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationAggregator.html
   */
  public deleteConfigurationAggregator () {
    this.add('config:DeleteConfigurationAggregator');
    return this;
  }

  /**
   * Deletes the configuration recorder
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConfigurationRecorder.html
   */
  public deleteConfigurationRecorder () {
    this.add('config:DeleteConfigurationRecorder');
    return this;
  }

  /**
   * Deletes the specified conformance pack and all the AWS Config rules and all evaluation results within that conformance pack.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteConformancePack.html
   */
  public deleteConformancePack () {
    this.add('config:DeleteConformancePack');
    return this;
  }

  /**
   * Deletes the delivery channel
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteDeliveryChannel.html
   */
  public deleteDeliveryChannel () {
    this.add('config:DeleteDeliveryChannel');
    return this;
  }

  /**
   * Deletes the evaluation results for the specified Config rule
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteEvaluationResults.html
   */
  public deleteEvaluationResults () {
    this.add('config:DeleteEvaluationResults');
    return this;
  }

  /**
   * Deletes the specified organization config rule and all of its evaluation results from all member accounts in that organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConfigRule.html
   */
  public deleteOrganizationConfigRule () {
    this.add('config:DeleteOrganizationConfigRule');
    return this;
  }

  /**
   * Deletes the specified organization conformance pack and all of its evaluation results from all member accounts in that organization.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteOrganizationConformancePack.html
   */
  public deleteOrganizationConformancePack () {
    this.add('config:DeleteOrganizationConformancePack');
    return this;
  }

  /**
   * Deletes pending authorization requests for a specified aggregator account in a specified region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeletePendingAggregationRequest.html
   */
  public deletePendingAggregationRequest () {
    this.add('config:DeletePendingAggregationRequest');
    return this;
  }

  /**
   * Deletes the remediation configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationConfiguration.html
   */
  public deleteRemediationConfiguration () {
    this.add('config:DeleteRemediationConfiguration');
    return this;
  }

  /**
   * Deletes one or more remediation exceptions for specific resource keys for a specific AWS Config Rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRemediationExceptions.html
   */
  public deleteRemediationExceptions () {
    this.add('config:DeleteRemediationExceptions');
    return this;
  }

  /**
   * Deletes the retention configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteRetentionConfiguration.html
   */
  public deleteRetentionConfiguration () {
    this.add('config:DeleteRetentionConfiguration');
    return this;
  }

  /**
   * Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DeliverConfigSnapshot.html
   */
  public deliverConfigSnapshot () {
    this.add('config:DeliverConfigSnapshot');
    return this;
  }

  /**
   * Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregateComplianceByConfigRules.html
   */
  public describeAggregateComplianceByConfigRules () {
    this.add('config:DescribeAggregateComplianceByConfigRules');
    return this;
  }

  /**
   * Returns a list of authorizations granted to various aggregator accounts and regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeAggregationAuthorizations.html
   */
  public describeAggregationAuthorizations () {
    this.add('config:DescribeAggregationAuthorizations');
    return this;
  }

  /**
   * Indicates whether the specified AWS Config rules are compliant
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByConfigRule.html
   */
  public describeComplianceByConfigRule () {
    this.add('config:DescribeComplianceByConfigRule');
    return this;
  }

  /**
   * Indicates whether the specified AWS resources are compliant
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeComplianceByResource.html
   */
  public describeComplianceByResource () {
    this.add('config:DescribeComplianceByResource');
    return this;
  }

  /**
   * Returns status information for each of your AWS managed Config rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRuleEvaluationStatus.html
   */
  public describeConfigRuleEvaluationStatus () {
    this.add('config:DescribeConfigRuleEvaluationStatus');
    return this;
  }

  /**
   * Returns details about your AWS Config rules
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigRules.html
   */
  public describeConfigRules () {
    this.add('config:DescribeConfigRules');
    return this;
  }

  /**
   * Returns status information for sources within an aggregator
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregatorSourcesStatus.html
   */
  public describeConfigurationAggregatorSourcesStatus () {
    this.add('config:DescribeConfigurationAggregatorSourcesStatus');
    return this;
  }

  /**
   * Returns the details of one or more configuration aggregators
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationAggregators.html
   */
  public describeConfigurationAggregators () {
    this.add('config:DescribeConfigurationAggregators');
    return this;
  }

  /**
   * Returns the current status of the specified configuration recorder
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html
   */
  public describeConfigurationRecorderStatus () {
    this.add('config:DescribeConfigurationRecorderStatus');
    return this;
  }

  /**
   * Returns the name of one or more specified configuration recorders
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html
   */
  public describeConfigurationRecorders () {
    this.add('config:DescribeConfigurationRecorders');
    return this;
  }

  /**
   * Returns compliance information for each rule in that conformance pack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackCompliance.html
   */
  public describeConformancePackCompliance () {
    this.add('config:DescribeConformancePackCompliance');
    return this;
  }

  /**
   * Provides one or more conformance packs deployment status.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePackStatus.html
   */
  public describeConformancePackStatus () {
    this.add('config:DescribeConformancePackStatus');
    return this;
  }

  /**
   * Returns a list of one or more conformance packs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConformancePacks.html
   */
  public describeConformancePacks () {
    this.add('config:DescribeConformancePacks');
    return this;
  }

  /**
   * Returns the current status of the specified delivery channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannelStatus.html
   */
  public describeDeliveryChannelStatus () {
    this.add('config:DescribeDeliveryChannelStatus');
    return this;
  }

  /**
   * Returns details about the specified delivery channel
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeDeliveryChannels.html
   */
  public describeDeliveryChannels () {
    this.add('config:DescribeDeliveryChannels');
    return this;
  }

  /**
   * Provides organization config rule deployment status for an organization.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRuleStatuses.html
   */
  public describeOrganizationConfigRuleStatuses () {
    this.add('config:DescribeOrganizationConfigRuleStatuses');
    return this;
  }

  /**
   * Returns a list of organization config rules.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConfigRules.html
   */
  public describeOrganizationConfigRules () {
    this.add('config:DescribeOrganizationConfigRules');
    return this;
  }

  /**
   * Provides organization conformance pack deployment status for an organization.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePackStatuses.html
   */
  public describeOrganizationConformancePackStatuses () {
    this.add('config:DescribeOrganizationConformancePackStatuses');
    return this;
  }

  /**
   * Returns a list of organization conformance packs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeOrganizationConformancePacks.html
   */
  public describeOrganizationConformancePacks () {
    this.add('config:DescribeOrganizationConformancePacks');
    return this;
  }

  /**
   * Returns a list of all pending aggregation requests
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribePendingAggregationRequests.html
   */
  public describePendingAggregationRequests () {
    this.add('config:DescribePendingAggregationRequests');
    return this;
  }

  /**
   * Returns the details of one or more remediation configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationConfigurations.html
   */
  public describeRemediationConfigurations () {
    this.add('config:DescribeRemediationConfigurations');
    return this;
  }

  /**
   * Returns the details of one or more remediation exceptions.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExceptions.html
   */
  public describeRemediationExceptions () {
    this.add('config:DescribeRemediationExceptions');
    return this;
  }

  /**
   * Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps and any error messages for steps that have failed
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRemediationExecutionStatus.html
   */
  public describeRemediationExecutionStatus () {
    this.add('config:DescribeRemediationExecutionStatus');
    return this;
  }

  /**
   * Returns the details of one or more retention configurations
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeRetentionConfigurations.html
   */
  public describeRetentionConfigurations () {
    this.add('config:DescribeRetentionConfigurations');
    return this;
  }

  /**
   * Returns the evaluation results for the specified AWS Config rule for a specific resource in a rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateComplianceDetailsByConfigRule.html
   */
  public getAggregateComplianceDetailsByConfigRule () {
    this.add('config:GetAggregateComplianceDetailsByConfigRule');
    return this;
  }

  /**
   * Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateConfigRuleComplianceSummary.html
   */
  public getAggregateConfigRuleComplianceSummary () {
    this.add('config:GetAggregateConfigRuleComplianceSummary');
    return this;
  }

  /**
   * Returns the resource counts across accounts and regions that are present in your AWS Config aggregator
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateDiscoveredResourceCounts.html
   */
  public getAggregateDiscoveredResourceCounts () {
    this.add('config:GetAggregateDiscoveredResourceCounts');
    return this;
  }

  /**
   * Returns configuration item that is aggregated for your specific resource in a specific source account and region
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetAggregateResourceConfig.html
   */
  public getAggregateResourceConfig () {
    this.add('config:GetAggregateResourceConfig');
    return this;
  }

  /**
   * Returns the evaluation results for the specified AWS Config rule
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByConfigRule.html
   */
  public getComplianceDetailsByConfigRule () {
    this.add('config:GetComplianceDetailsByConfigRule');
    return this;
  }

  /**
   * Returns the evaluation results for the specified AWS resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html
   */
  public getComplianceDetailsByResource () {
    this.add('config:GetComplianceDetailsByResource');
    return this;
  }

  /**
   * Returns the number of AWS Config rules that are compliant and noncompliant, up to a maximum of 25 for each
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByConfigRule.html
   */
  public getComplianceSummaryByConfigRule () {
    this.add('config:GetComplianceSummaryByConfigRule');
    return this;
  }

  /**
   * Returns the number of resources that are compliant and the number that are noncompliant
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceSummaryByResourceType.html
   */
  public getComplianceSummaryByResourceType () {
    this.add('config:GetComplianceSummaryByResourceType');
    return this;
  }

  /**
   * Returns compliance details of a conformance pack for all AWS resources that are monitered by conformance pack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceDetails.html
   */
  public getConformancePackComplianceDetails () {
    this.add('config:GetConformancePackComplianceDetails');
    return this;
  }

  /**
   * Provides compliance summary for one or more conformance packs.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetConformancePackComplianceSummary.html
   */
  public getConformancePackComplianceSummary () {
    this.add('config:GetConformancePackComplianceSummary');
    return this;
  }

  /**
   * Returns the resource types, the number of each resource type, and the total number of resources that AWS Config is recording in this region for your AWS account
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetDiscoveredResourceCounts.html
   */
  public getDiscoveredResourceCounts () {
    this.add('config:GetDiscoveredResourceCounts');
    return this;
  }

  /**
   * Returns detailed status for each member account within an organization for a given organization config rule.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConfigRuleDetailedStatus.html
   */
  public getOrganizationConfigRuleDetailedStatus () {
    this.add('config:GetOrganizationConfigRuleDetailedStatus');
    return this;
  }

  /**
   * Returns detailed status for each member account within an organization for a given organization conformance pack.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetOrganizationConformancePackDetailedStatus.html
   */
  public getOrganizationConformancePackDetailedStatus () {
    this.add('config:GetOrganizationConformancePackDetailedStatus');
    return this;
  }

  /**
   * Returns a list of configuration items for the specified resource
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceConfigHistory.html
   */
  public getResourceConfigHistory () {
    this.add('config:GetResourceConfigHistory');
    return this;
  }

  /**
   * Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_ListAggregateDiscoveredResources.html
   */
  public listAggregateDiscoveredResources () {
    this.add('config:ListAggregateDiscoveredResources');
    return this;
  }

  /**
   * Accepts a resource type and returns a list of resource identifiers for the resources of that type
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_ListDiscoveredResources.html
   */
  public listDiscoveredResources () {
    this.add('config:ListDiscoveredResources');
    return this;
  }

  /**
   * List the tags for AWS Config resource
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource () {
    this.add('config:ListTagsForResource');
    return this;
  }

  /**
   * Authorizes the aggregator account and region to collect data from the source account and region
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutAggregationAuthorization.html
   */
  public putAggregationAuthorization () {
    this.add('config:PutAggregationAuthorization');
    return this;
  }

  /**
   * Adds or updates an AWS Config rule for evaluating whether your AWS resources comply with your desired configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html
   */
  public putConfigRule () {
    this.add('config:PutConfigRule');
    return this;
  }

  /**
   * Creates and updates the configuration aggregator with the selected source accounts and regions
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationAggregator.html
   */
  public putConfigurationAggregator () {
    this.add('config:PutConfigurationAggregator');
    return this;
  }

  /**
   * Creates a new configuration recorder to record the selected resource configurations
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html
   */
  public putConfigurationRecorder () {
    this.add('config:PutConfigurationRecorder');
    return this;
  }

  /**
   * Creates or updates a conformance pack.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html
   */
  public putConformancePack () {
    this.add('config:PutConformancePack');
    return this;
  }

  /**
   * Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutDeliveryChannel.html
   */
  public putDeliveryChannel () {
    this.add('config:PutDeliveryChannel');
    return this;
  }

  /**
   * Used by an AWS Lambda function to deliver evaluation results to AWS Config
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutEvaluations.html
   */
  public putEvaluations () {
    this.add('config:PutEvaluations');
    return this;
  }

  /**
   * Adds or updates organization config rule for your entire organization evaluating whether your AWS resources comply with your desired configurations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html
   */
  public putOrganizationConfigRule () {
    this.add('config:PutOrganizationConfigRule');
    return this;
  }

  /**
   * Adds or updates organization conformance pack for your entire organization evaluating whether your AWS resources comply with your desired configurations.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html
   */
  public putOrganizationConformancePack () {
    this.add('config:PutOrganizationConformancePack');
    return this;
  }

  /**
   * Adds or updates the remediation configuration with a specific AWS Config rule with the selected target or action
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationConfigurations.html
   */
  public putRemediationConfigurations () {
    this.add('config:PutRemediationConfigurations');
    return this;
  }

  /**
   * Adds or updates remediation exceptions for specific resources for a specific AWS Config rule.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutRemediationExceptions.html
   */
  public putRemediationExceptions () {
    this.add('config:PutRemediationExceptions');
    return this;
  }

  /**
   * Creates and updates the retention configuration with details about retention period (number of days) that AWS Config stores your historical information
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_PutRetentionConfiguration.html
   */
  public putRetentionConfiguration () {
    this.add('config:PutRetentionConfiguration');
    return this;
  }

  /**
   * Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of AWS resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_SelectAggregateResourceConfig.html
   */
  public selectAggregateResourceConfig () {
    this.add('config:SelectAggregateResourceConfig');
    return this;
  }

  /**
   * Accepts a structured query language (SQL) SELECT command, performs the corresponding search, and returns resource configurations matching the properties
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_SelectResourceConfig.html
   */
  public selectResourceConfig () {
    this.add('config:SelectResourceConfig');
    return this;
  }

  /**
   * Evaluates your resources against the specified Config rules
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigRulesEvaluation.html
   */
  public startConfigRulesEvaluation () {
    this.add('config:StartConfigRulesEvaluation');
    return this;
  }

  /**
   * Starts recording configurations of the AWS resources you have selected to record in your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_StartConfigurationRecorder.html
   */
  public startConfigurationRecorder () {
    this.add('config:StartConfigurationRecorder');
    return this;
  }

  /**
   * Runs an on-demand remediation for the specified AWS Config rules against the last known remediation configuration
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_StartRemediationExecution.html
   */
  public startRemediationExecution () {
    this.add('config:StartRemediationExecution');
    return this;
  }

  /**
   * Stops recording configurations of the AWS resources you have selected to record in your AWS account
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_StopConfigurationRecorder.html
   */
  public stopConfigurationRecorder () {
    this.add('config:StopConfigurationRecorder');
    return this;
  }

  /**
   * Associates the specified tags to a resource with the specified resourceArn
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_TagResource.html
   */
  public tagResource () {
    this.add('config:TagResource');
    return this;
  }

  /**
   * Deletes specified tags from a resource
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/config/latest/APIReference/API_UntagResource.html
   */
  public untagResource () {
    this.add('config:UntagResource');
    return this;
  }
}
