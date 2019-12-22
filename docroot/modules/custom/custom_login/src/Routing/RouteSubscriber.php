<?php

namespace Drupal\custom_login\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;

/**
 * Listens to the dynamic route events.
 */
class RouteSubscriber extends RouteSubscriberBase {

  /**
   * {@inheritdoc}
   */
  public function alterRoutes(RouteCollection $collection) {
    // Change path '/user/login' to '/entrance'.
    if ($route = $collection->get('user.login')) {
      $route->setPath('/entrance');
    }

    //Redirection for user profile
    if ($route = $collection->get('user.page')) {
      $route->setPath('/entrance');
    }

    // Set new path for registration.
    if ($route = $collection->get('user.register')) {
      $route->setPath('/entrance/register');
    }

    if ($route = $collection->get('user.pass')) {
      $route->setPath('/entrance/password');
    }
  }

}
