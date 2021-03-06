import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service wafv2
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awswafv2.html
 */
export class Wafv2 extends PolicyStatement {
  public servicePrefix = 'wafv2';
  public actions : Actions = {
    "AssociateWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_AssociateWebACL.html",
      "description": "Grants permission to associate a WebACL with a resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "webacl": {
          "required": true
        },
        "apigateway": {
          "required": false
        },
        "loadbalancer/app/": {
          "required": false
        }
      }
    },
    "CheckCapacity": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_CheckCapacity.html",
      "description": "Grants permission to calculate web ACL capacity unit (WCU) requirements for a specified scope and set of rules.",
      "accessLevel": "Read"
    },
    "CreateIPSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateIPSet.html",
      "description": "Grants permission to create an IPSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ipset": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateRegexPatternSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRegexPatternSet.html",
      "description": "Grants permission to create a RegexPatternSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "regexpatternset": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateRuleGroup": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRuleGroup.html",
      "description": "Grants permission to create a RuleGroup.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "CreateWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateWebACL.html",
      "description": "Grants permission to create a WebACL.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      },
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteFirewallManagerRuleGroups": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteFirewallManagerRuleGroups.html",
      "description": "Grants permission to delete specified FirewallManagedRulesGroups from the specified WebACL if not managed by Firewall Manager anymore.",
      "accessLevel": "Write",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "DeleteIPSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteIPSet.html",
      "description": "Grants permission to delete the specified IPSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ipset": {
          "required": true
        }
      }
    },
    "DeleteLoggingConfiguration": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteLoggingConfiguration.html",
      "description": "Grants permission to delete the LoggingConfiguration from the specified WebACL.",
      "accessLevel": "Write",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "DeletePermissionPolicy": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_DeletePermissionPolicy.html",
      "description": "Grants permission to delete the PermissionPolicy on the specified RuleGroup.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      }
    },
    "DeleteRegexPatternSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteRegexPatternSet.html",
      "description": "Grants permission to delete the specified RegexPatternSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "regexpatternset": {
          "required": true
        }
      }
    },
    "DeleteRuleGroup": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteRuleGroup.html",
      "description": "Grants permission to delete the specified RuleGroup.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      }
    },
    "DeleteWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteWebACL.html",
      "description": "Grants permission to delete the specified WebACL.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "DescribeManagedRuleGroup": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_DescribeManagedRuleGroup.html",
      "description": "Grants permission to view high-level information for a managed rule group.",
      "accessLevel": "List"
    },
    "DisassociateWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_DisassociateWebACL.html",
      "description": "Grants permission disassociate a WebACL from an application resource.",
      "accessLevel": "Write",
      "resourceTypes": {
        "apigateway": {
          "required": false
        },
        "loadbalancer/app/": {
          "required": false
        }
      }
    },
    "GetIPSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_GetIPSet.html",
      "description": "Grants permission to view details about the specified IPSet.",
      "accessLevel": "Read",
      "resourceTypes": {
        "ipset": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetLoggingConfiguration": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_GetLoggingConfiguration.html",
      "description": "Grants permission to view LoggingConfiguration about the specified WebACL.",
      "accessLevel": "Read",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetPermissionPolicy": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_GetPermissionPolicy.html",
      "description": "Grants permission to view PermissionPolicy on the specified RuleGroup.",
      "accessLevel": "Read",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      }
    },
    "GetRateBasedStatementManagedKeys": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRateBasedStatementManagedKeys.html",
      "description": "Grants permission to view the keys that are currently blocked by a rate-based rule.",
      "accessLevel": "Read",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetRegexPatternSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRegexPatternSet.html",
      "description": "Grants permission to view details about the specified RegexPatternSet.",
      "accessLevel": "Read",
      "resourceTypes": {
        "regexpatternset": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetRuleGroup": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRuleGroup.html",
      "description": "Grants permission to view details about the specified RuleGroup.",
      "accessLevel": "Read",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetSampledRequests": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_GetSampledRequests.html",
      "description": "Grants permission to view detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose.",
      "accessLevel": "Read",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "GetWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_GetWebACL.html",
      "description": "Grants permission to view details about the specified GetWebACL.",
      "accessLevel": "Read",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "GetWebACLForResource": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_GetWebACLForResource.html",
      "description": "Grants permission to view the WebACL for the specified resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "apigateway": {
          "required": false
        },
        "loadbalancer/app/": {
          "required": false
        }
      }
    },
    "ListAvailableManagedRuleGroups": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_ListAvailableManagedRuleGroups.html",
      "description": "Grants permission to view an array of managed rule groups that are available for you to use.",
      "accessLevel": "List"
    },
    "ListIPSets": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_ListIPSets.html",
      "description": "Grants permission to view an array of IPSetSummary objects for the IP sets that you manage.",
      "accessLevel": "List"
    },
    "ListLoggingConfigurations": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_ListLoggingConfigurations.html",
      "description": "Grants permission to view an array of your LoggingConfiguration objects.",
      "accessLevel": "List"
    },
    "ListRegexPatternSets": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_ListRegexPatternSets.html",
      "description": "Grants permission to view an array of RegexPatternSetSummary objects for the regex pattern sets that you manage.",
      "accessLevel": "List"
    },
    "ListResourcesForWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_ListResourcesForWebACL.html",
      "description": "Grants permission to view an array of the Amazon Resource Names (ARNs) for the resources that are associated with the specified web ACL.",
      "accessLevel": "List",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "ListRuleGroups": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_ListRuleGroups.html",
      "description": "Grants permission to view an array of RuleGroupSummary objects for the rule groups that you manage.",
      "accessLevel": "List"
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to lists tag for the specified resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "ipset": {
          "required": false
        },
        "regexpatternset": {
          "required": false
        },
        "rulegroup": {
          "required": false
        },
        "webacl": {
          "required": false
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ListWebACLs": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_ListWebACLs.html",
      "description": "Grants permission to view an array of WebACLSummary objects for the web ACLs that you manage.",
      "accessLevel": "List"
    },
    "PutLoggingConfiguration": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_PutLoggingConfiguration.html",
      "description": "Grants permission to enables the specified LoggingConfiguration, to start logging from a web ACL.",
      "accessLevel": "Write",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      }
    },
    "PutPermissionPolicy": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_PutPermissionPolicy.html",
      "description": "Grants permission to attach the specified IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to associates tags with the specified AWS resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "ipset": {
          "required": false
        },
        "regexpatternset": {
          "required": false
        },
        "rulegroup": {
          "required": false
        },
        "webacl": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys",
        "aws:RequestTag/${TagKey}",
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to disassociates tags from an AWS resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "ipset": {
          "required": false
        },
        "regexpatternset": {
          "required": false
        },
        "rulegroup": {
          "required": false
        },
        "webacl": {
          "required": false
        }
      },
      "conditions": [
        "aws:TagKeys"
      ]
    },
    "UpdateIPSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateIPSet.html",
      "description": "Grants permission to update the specified IPSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "ipset": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateRegexPatternSet": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateRegexPatternSet.html",
      "description": "Grants permission to update the specified RegexPatternSet.",
      "accessLevel": "Write",
      "resourceTypes": {
        "regexpatternset": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateRuleGroup": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateRuleGroup.html",
      "description": "Grants permission to update the specified RuleGroup.",
      "accessLevel": "Write",
      "resourceTypes": {
        "rulegroup": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "UpdateWebACL": {
      "url": "https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateWebACL.html",
      "description": "Grants permission to update the specified WebACL.",
      "accessLevel": "Permissions management",
      "resourceTypes": {
        "webacl": {
          "required": true
        }
      },
      "conditions": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };
  public resourceTypes : ResourceTypes = {
    "webacl": {
      "name": "webacl",
      "arn": "arn:${Partition}:wafv2:${Region}:${Account}:${Scope}/webacl/${Name}/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "ipset": {
      "name": "ipset",
      "arn": "arn:${Partition}:wafv2:${Region}:${Account}:${Scope}/ipset/${Name}/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "rulegroup": {
      "name": "rulegroup",
      "arn": "arn:${Partition}:wafv2:${Region}:${Account}:${Scope}/rulegroup/${Name}/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "regexpatternset": {
      "name": "regexpatternset",
      "arn": "arn:${Partition}:wafv2:${Region}:${Account}:${Scope}/regexpatternset/${Name}/${Id}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    },
    "loadbalancer/app/": {
      "name": "loadbalancer/app/",
      "arn": "arn:${Partition}:elasticloadbalancing:${Region}:${Account}:loadbalancer/app/${LoadBalancerName}/${LoadBalancerId}",
      "conditionKeys": []
    },
    "apigateway": {
      "name": "apigateway",
      "arn": "arn:${Partition}:apigateway:${Region}:${Account}:/restapis/${ApiId}/stages/prod",
      "conditionKeys": []
    }
  };

  /**
   * Grants permission to associate a WebACL with a resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_AssociateWebACL.html
   */
  public associateWebACL () {
    this.add('wafv2:AssociateWebACL');
    return this;
  }

  /**
   * Grants permission to calculate web ACL capacity unit (WCU) requirements for a specified scope and set of rules.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CheckCapacity.html
   */
  public checkCapacity () {
    this.add('wafv2:CheckCapacity');
    return this;
  }

  /**
   * Grants permission to create an IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateIPSet.html
   */
  public createIPSet () {
    this.add('wafv2:CreateIPSet');
    return this;
  }

  /**
   * Grants permission to create a RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRegexPatternSet.html
   */
  public createRegexPatternSet () {
    this.add('wafv2:CreateRegexPatternSet');
    return this;
  }

  /**
   * Grants permission to create a RuleGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateRuleGroup.html
   */
  public createRuleGroup () {
    this.add('wafv2:CreateRuleGroup');
    return this;
  }

  /**
   * Grants permission to create a WebACL.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_CreateWebACL.html
   */
  public createWebACL () {
    this.add('wafv2:CreateWebACL');
    return this;
  }

  /**
   * Grants permission to delete specified FirewallManagedRulesGroups from the specified WebACL if not managed by Firewall Manager anymore.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteFirewallManagerRuleGroups.html
   */
  public deleteFirewallManagerRuleGroups () {
    this.add('wafv2:DeleteFirewallManagerRuleGroups');
    return this;
  }

  /**
   * Grants permission to delete the specified IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteIPSet.html
   */
  public deleteIPSet () {
    this.add('wafv2:DeleteIPSet');
    return this;
  }

  /**
   * Grants permission to delete the LoggingConfiguration from the specified WebACL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteLoggingConfiguration.html
   */
  public deleteLoggingConfiguration () {
    this.add('wafv2:DeleteLoggingConfiguration');
    return this;
  }

  /**
   * Grants permission to delete the PermissionPolicy on the specified RuleGroup.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeletePermissionPolicy.html
   */
  public deletePermissionPolicy () {
    this.add('wafv2:DeletePermissionPolicy');
    return this;
  }

  /**
   * Grants permission to delete the specified RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteRegexPatternSet.html
   */
  public deleteRegexPatternSet () {
    this.add('wafv2:DeleteRegexPatternSet');
    return this;
  }

  /**
   * Grants permission to delete the specified RuleGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteRuleGroup.html
   */
  public deleteRuleGroup () {
    this.add('wafv2:DeleteRuleGroup');
    return this;
  }

  /**
   * Grants permission to delete the specified WebACL.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DeleteWebACL.html
   */
  public deleteWebACL () {
    this.add('wafv2:DeleteWebACL');
    return this;
  }

  /**
   * Grants permission to view high-level information for a managed rule group.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DescribeManagedRuleGroup.html
   */
  public describeManagedRuleGroup () {
    this.add('wafv2:DescribeManagedRuleGroup');
    return this;
  }

  /**
   * Grants permission disassociate a WebACL from an application resource.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_DisassociateWebACL.html
   */
  public disassociateWebACL () {
    this.add('wafv2:DisassociateWebACL');
    return this;
  }

  /**
   * Grants permission to view details about the specified IPSet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetIPSet.html
   */
  public getIPSet () {
    this.add('wafv2:GetIPSet');
    return this;
  }

  /**
   * Grants permission to view LoggingConfiguration about the specified WebACL.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetLoggingConfiguration.html
   */
  public getLoggingConfiguration () {
    this.add('wafv2:GetLoggingConfiguration');
    return this;
  }

  /**
   * Grants permission to view PermissionPolicy on the specified RuleGroup.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetPermissionPolicy.html
   */
  public getPermissionPolicy () {
    this.add('wafv2:GetPermissionPolicy');
    return this;
  }

  /**
   * Grants permission to view the keys that are currently blocked by a rate-based rule.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRateBasedStatementManagedKeys.html
   */
  public getRateBasedStatementManagedKeys () {
    this.add('wafv2:GetRateBasedStatementManagedKeys');
    return this;
  }

  /**
   * Grants permission to view details about the specified RegexPatternSet.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRegexPatternSet.html
   */
  public getRegexPatternSet () {
    this.add('wafv2:GetRegexPatternSet');
    return this;
  }

  /**
   * Grants permission to view details about the specified RuleGroup.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetRuleGroup.html
   */
  public getRuleGroup () {
    this.add('wafv2:GetRuleGroup');
    return this;
  }

  /**
   * Grants permission to view detailed information about a specified number of requests--a sample--that AWS WAF randomly selects from among the first 5,000 requests that your AWS resource received during a time range that you choose.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetSampledRequests.html
   */
  public getSampledRequests () {
    this.add('wafv2:GetSampledRequests');
    return this;
  }

  /**
   * Grants permission to view details about the specified GetWebACL.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetWebACL.html
   */
  public getWebACL () {
    this.add('wafv2:GetWebACL');
    return this;
  }

  /**
   * Grants permission to view the WebACL for the specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_GetWebACLForResource.html
   */
  public getWebACLForResource () {
    this.add('wafv2:GetWebACLForResource');
    return this;
  }

  /**
   * Grants permission to view an array of managed rule groups that are available for you to use.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListAvailableManagedRuleGroups.html
   */
  public listAvailableManagedRuleGroups () {
    this.add('wafv2:ListAvailableManagedRuleGroups');
    return this;
  }

  /**
   * Grants permission to view an array of IPSetSummary objects for the IP sets that you manage.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListIPSets.html
   */
  public listIPSets () {
    this.add('wafv2:ListIPSets');
    return this;
  }

  /**
   * Grants permission to view an array of your LoggingConfiguration objects.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListLoggingConfigurations.html
   */
  public listLoggingConfigurations () {
    this.add('wafv2:ListLoggingConfigurations');
    return this;
  }

  /**
   * Grants permission to view an array of RegexPatternSetSummary objects for the regex pattern sets that you manage.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListRegexPatternSets.html
   */
  public listRegexPatternSets () {
    this.add('wafv2:ListRegexPatternSets');
    return this;
  }

  /**
   * Grants permission to view an array of the Amazon Resource Names (ARNs) for the resources that are associated with the specified web ACL.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListResourcesForWebACL.html
   */
  public listResourcesForWebACL () {
    this.add('wafv2:ListResourcesForWebACL');
    return this;
  }

  /**
   * Grants permission to view an array of RuleGroupSummary objects for the rule groups that you manage.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListRuleGroups.html
   */
  public listRuleGroups () {
    this.add('wafv2:ListRuleGroups');
    return this;
  }

  /**
   * Grants permission to lists tag for the specified resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource () {
    this.add('wafv2:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to view an array of WebACLSummary objects for the web ACLs that you manage.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_ListWebACLs.html
   */
  public listWebACLs () {
    this.add('wafv2:ListWebACLs');
    return this;
  }

  /**
   * Grants permission to enables the specified LoggingConfiguration, to start logging from a web ACL.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_PutLoggingConfiguration.html
   */
  public putLoggingConfiguration () {
    this.add('wafv2:PutLoggingConfiguration');
    return this;
  }

  /**
   * Grants permission to attach the specified IAM policy to the specified resource. The only supported use for this action is to share a RuleGroup across accounts.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_PutPermissionPolicy.html
   */
  public putPermissionPolicy () {
    this.add('wafv2:PutPermissionPolicy');
    return this;
  }

  /**
   * Grants permission to associates tags with the specified AWS resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_TagResource.html
   */
  public tagResource () {
    this.add('wafv2:TagResource');
    return this;
  }

  /**
   * Grants permission to disassociates tags from an AWS resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UntagResource.html
   */
  public untagResource () {
    this.add('wafv2:UntagResource');
    return this;
  }

  /**
   * Grants permission to update the specified IPSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateIPSet.html
   */
  public updateIPSet () {
    this.add('wafv2:UpdateIPSet');
    return this;
  }

  /**
   * Grants permission to update the specified RegexPatternSet.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateRegexPatternSet.html
   */
  public updateRegexPatternSet () {
    this.add('wafv2:UpdateRegexPatternSet');
    return this;
  }

  /**
   * Grants permission to update the specified RuleGroup.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateRuleGroup.html
   */
  public updateRuleGroup () {
    this.add('wafv2:UpdateRuleGroup');
    return this;
  }

  /**
   * Grants permission to update the specified WebACL.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/waf/latest/APIReference/API_UpdateWebACL.html
   */
  public updateWebACL () {
    this.add('wafv2:UpdateWebACL');
    return this;
  }
}
