import { Actions, PolicyStatement, ResourceTypes } from "./shared";

/**
 * Action provider for service health
 *
 * https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awshealthapisandnotifications.html
 */
export class Health extends PolicyStatement {
  public servicePrefix = 'health';
  public actions : Actions = {
    "DescribeAffectedAccountsForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html",
      "description": "Gets a list of accounts that have been affected by the specified events in organization.",
      "accessLevel": "Read"
    },
    "DescribeAffectedEntities": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html",
      "description": "Gets a list of entities that have been affected by the specified events.",
      "accessLevel": "Read",
      "resourceTypes": {
        "event": {
          "required": true
        }
      },
      "conditions": [
        "health:eventTypeCode",
        "health:service"
      ]
    },
    "DescribeAffectedEntitiesForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html",
      "description": "Gets a list of entities that have been affected by the specified events and accounts in organization.",
      "accessLevel": "Read"
    },
    "DescribeEntityAggregates": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html",
      "description": "Returns the number of entities that are affected by each of the specified events.",
      "accessLevel": "Read"
    },
    "DescribeEventAggregates": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html",
      "description": "Returns the number of events of each event type (issue, scheduled change, and account notification).",
      "accessLevel": "Read"
    },
    "DescribeEventDetails": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html",
      "description": "Returns detailed information about one or more specified events.",
      "accessLevel": "Read",
      "resourceTypes": {
        "event": {
          "required": true
        }
      },
      "conditions": [
        "health:eventTypeCode",
        "health:service"
      ]
    },
    "DescribeEventDetailsForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html",
      "description": "Returns detailed information about one or more specified events for provided accounts in organization.",
      "accessLevel": "Read"
    },
    "DescribeEventTypes": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html",
      "description": "Returns the event types that meet the specified filter criteria.",
      "accessLevel": "Read"
    },
    "DescribeEvents": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html",
      "description": "Returns information about events that meet the specified filter criteria.",
      "accessLevel": "Read"
    },
    "DescribeEventsForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html",
      "description": "Returns information about events that meet the specified filter criteria in organization.",
      "accessLevel": "Read"
    },
    "DescribeHealthServiceStatusForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html",
      "description": "Returns the status of enabling or disabling the Organizational View feature",
      "accessLevel": "Permissions management"
    },
    "DisableHealthServiceAccessForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_DisableHealthServiceAccessForOrganization.html",
      "description": "Disables the Organizational View feature.",
      "accessLevel": "Permissions management"
    },
    "EnableHealthServiceAccessForOrganization": {
      "url": "https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html",
      "description": "Enables the Organizational View feature.",
      "accessLevel": "Permissions management"
    }
  };
  public resourceTypes : ResourceTypes = {
    "event": {
      "name": "event",
      "arn": "arn:${Partition}:health:${Region}:${Account}:event/${Service}/${EventTypeCode}/*",
      "conditionKeys": []
    }
  };

  /**
   * Gets a list of accounts that have been affected by the specified events in organization.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedAccountsForOrganization.html
   */
  public describeAffectedAccountsForOrganization () {
    this.add('health:DescribeAffectedAccountsForOrganization');
    return this;
  }

  /**
   * Gets a list of entities that have been affected by the specified events.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html
   */
  public describeAffectedEntities () {
    this.add('health:DescribeAffectedEntities');
    return this;
  }

  /**
   * Gets a list of entities that have been affected by the specified events and accounts in organization.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html
   */
  public describeAffectedEntitiesForOrganization () {
    this.add('health:DescribeAffectedEntitiesForOrganization');
    return this;
  }

  /**
   * Returns the number of entities that are affected by each of the specified events.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html
   */
  public describeEntityAggregates () {
    this.add('health:DescribeEntityAggregates');
    return this;
  }

  /**
   * Returns the number of events of each event type (issue, scheduled change, and account notification).
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html
   */
  public describeEventAggregates () {
    this.add('health:DescribeEventAggregates');
    return this;
  }

  /**
   * Returns detailed information about one or more specified events.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html
   */
  public describeEventDetails () {
    this.add('health:DescribeEventDetails');
    return this;
  }

  /**
   * Returns detailed information about one or more specified events for provided accounts in organization.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html
   */
  public describeEventDetailsForOrganization () {
    this.add('health:DescribeEventDetailsForOrganization');
    return this;
  }

  /**
   * Returns the event types that meet the specified filter criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html
   */
  public describeEventTypes () {
    this.add('health:DescribeEventTypes');
    return this;
  }

  /**
   * Returns information about events that meet the specified filter criteria.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html
   */
  public describeEvents () {
    this.add('health:DescribeEvents');
    return this;
  }

  /**
   * Returns information about events that meet the specified filter criteria in organization.
   *
   * Access Level: Read
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html
   */
  public describeEventsForOrganization () {
    this.add('health:DescribeEventsForOrganization');
    return this;
  }

  /**
   * Returns the status of enabling or disabling the Organizational View feature
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html
   */
  public describeHealthServiceStatusForOrganization () {
    this.add('health:DescribeHealthServiceStatusForOrganization');
    return this;
  }

  /**
   * Disables the Organizational View feature.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_DisableHealthServiceAccessForOrganization.html
   */
  public disableHealthServiceAccessForOrganization () {
    this.add('health:DisableHealthServiceAccessForOrganization');
    return this;
  }

  /**
   * Enables the Organizational View feature.
   *
   * Access Level: Permissions management
   *
   * https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html
   */
  public enableHealthServiceAccessForOrganization () {
    this.add('health:EnableHealthServiceAccessForOrganization');
    return this;
  }
}
