import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service dlm
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazondatalifecyclemanager.html
 */
export class Dlm extends PolicyStatement {
  public servicePrefix = 'dlm';
  public actions : Actions = {
    "CreateLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_CreateLifecyclePolicy.html",
      "description": "Create a data lifecycle policy to manage the scheduled creation and retention of Amazon EBS snapshots. You may have up to 100 policies.",
      "accessLevel": "Write",
      "conditions": [
        "aws:RequestTag/${TagKey}",
        "aws:TagKeys"
      ]
    },
    "DeleteLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_DeleteLifecyclePolicy.html",
      "description": "Delete an existing data lifecycle policy. In addition, this action halts the creation and deletion of snapshots that the policy specified. Existing snapshots are not affected.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "GetLifecyclePolicies": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicies.html",
      "description": "Returns a list of summary descriptions of data lifecycle policies.",
      "accessLevel": "List"
    },
    "GetLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicy.html",
      "description": "Returns a complete description of a single data lifecycle policy.",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "ListTagsForResource": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_ListTagsForResource.html",
      "description": "Grants permission to list the tags associated with a resource.",
      "accessLevel": "Read",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "TagResource": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_TagResource.html",
      "description": "Grants permission to add or update tags of a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "UntagResource": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_UntagResource.html",
      "description": "Grants permission to remove associated with a resource.",
      "accessLevel": "Tagging",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    },
    "UpdateLifecyclePolicy": {
      "url": "https://docs.aws.amazon.com/dlm/latest/APIReference/API_UpdateLifecyclePolicy.html",
      "description": "Updates an existing data lifecycle policy.",
      "accessLevel": "Write",
      "resourceTypes": {
        "policy": {
          "required": true
        }
      }
    }
  };
  public resourceTypes : ResourceTypes = {
    "policy": {
      "name": "policy",
      "arn": "arn:${Partition}:dlm:${Region}:${Account}:policy/${ResourceName}",
      "conditionKeys": [
        "aws:ResourceTag/${TagKey}"
      ]
    }
  };

  /**
   * Create a data lifecycle policy to manage the scheduled creation and retention of Amazon EBS snapshots. You may have up to 100 policies.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_CreateLifecyclePolicy.html
   */
  public createLifecyclePolicy () {
    this.add('dlm:CreateLifecyclePolicy');
    return this;
  }

  /**
   * Delete an existing data lifecycle policy. In addition, this action halts the creation and deletion of snapshots that the policy specified. Existing snapshots are not affected.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_DeleteLifecyclePolicy.html
   */
  public deleteLifecyclePolicy () {
    this.add('dlm:DeleteLifecyclePolicy');
    return this;
  }

  /**
   * Returns a list of summary descriptions of data lifecycle policies.
   *
   * Access Level: List
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicies.html
   */
  public getLifecyclePolicies () {
    this.add('dlm:GetLifecyclePolicies');
    return this;
  }

  /**
   * Returns a complete description of a single data lifecycle policy.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_GetLifecyclePolicy.html
   */
  public getLifecyclePolicy () {
    this.add('dlm:GetLifecyclePolicy');
    return this;
  }

  /**
   * Grants permission to list the tags associated with a resource.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_ListTagsForResource.html
   */
  public listTagsForResource () {
    this.add('dlm:ListTagsForResource');
    return this;
  }

  /**
   * Grants permission to add or update tags of a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_TagResource.html
   */
  public tagResource () {
    this.add('dlm:TagResource');
    return this;
  }

  /**
   * Grants permission to remove associated with a resource.
   *
   * Access Level: Tagging
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_UntagResource.html
   */
  public untagResource () {
    this.add('dlm:UntagResource');
    return this;
  }

  /**
   * Updates an existing data lifecycle policy.
   *
   * Access Level: Write
   *
   * https://docs.aws.amazon.com/dlm/latest/APIReference/API_UpdateLifecyclePolicy.html
   */
  public updateLifecyclePolicy () {
    this.add('dlm:UpdateLifecyclePolicy');
    return this;
  }
}
