---
title: "Troubleshooting: How to Debug Microservices on Kubernetes"
category: software development
featured_image: shipping-containers.jpg
featured_image_alt: Stacked shipping containers at a port
---

Forty to 90 percent of total software product costs happen after launch.

Sure, part of that is simple maintenance, such as app hosting, support, training staff, and other items you’d expect. But a significant part of it is debugging and refactoring.

What are some of the best techniques for debugging microservices with Kubernetes without running up the budget or having to work on weekends? Keep reading to find out.

## The Challenge

As if the inherent complexity of software weren’t enough, a [microservices architecture](https://microservices.io/patterns/microservices.html){:target="_blank" rel="noopener"} adds a whole new layer of complexity.

What are microservices? While there’s no single agreed-upon definition, the consensus in the industry is that they are small, independent processes that intercommunicate to fulfill the tasks of a larger application.

In other words, a microservices architecture is an approach to building a single application as a collection of lightweight services.

Microservices have gone mainstream in recent years. The modularity of this architecture makes it ideal for creating fault-tolerant, scalable systems developed by agile teams with quick iteration times.

But that modularity comes with a price: A single application can have hundreds of services constantly communicating with each other, often asynchronously, to make the app tick.

This means services can run across many nodes and be written in different languages by different teams. Testing and debugging aren’t solved by just running each service by itself; the bottleneck could be in the interaction.

There are at least two consequences to all of this:

- It’s difficult to replicate error states
- It’s also tricky to get a holistic view of the app state at any given time, affecting observability

All of which makes troubleshooting microservices more challenging.

## Methods for Debugging Microservices with Kubernetes

There are several methods to debug microservices using Kubernetes, but a great tool (and one recommended by [Kubernetes itself](https://kubernetes.io/docs/tasks/debug-application-cluster/local-debugging/){:target="_blank" rel="noopener"} is Telepresence.

Normally, you’d have to get a shell on a running container manually and run your tools inside that remote shell. But with Telepresence, you can debug services running on a remote cluster locally using your own setup.

### Using Telepresence

To get started, make sure that:

- You have configured kubectl to communicate with the remote cluster
- You have [installed Telepresence](https://www.telepresence.io/reference/install){:target="_blank" rel="noopener"}

Once you take care of those steps, it’s time to get a shell. Open a terminal and run `telepresence` (no arguments). Congratulations! You have a Telepresence shell running locally.

You can also use the `--swap-deployment` option to spawn a shell and run a service locally while connecting to the remote cluster.

So, you would run:

```shell
telepresence --swap-deployment $DEPLOYMENT_NAME
```

Replace `$DEPLOYMENT_NAME` with the name of your existing deployment,

This way, you can make edits in your local environment and see your changes take effect right away when you save.

### An Alternative: Squash

Squash is similar in principle to Telepresence in that it allows you to perform runtime debugging of distributed apps. It can integrate seamlessly with IDEs such as IntelliJ and Visual Studio Code.

You can even set breakpoints and modify variables in your code.

To get started, you install the Squash command-line interface locally. Then, you install the Squash plugin for your IDE from within it. The two should be able to operate together.

### Troubleshooting Errors

The user requests your application, ready to be wowed by its functionality. But, instead, all she gets in her browser is a 500 error.

Where could the problem be?

[Ray Tsang](https://jaxenter.com/troubleshooting-microservices-kubernetes-158797.html){:target="_blank" rel="noopener"}, Developer Advocate for the Google Cloud Platform, recommends following these steps to identify and fix this kind of error.

1. Use the same browser (if available to you) but a different session to test and see if the error persists
2. Check to see if the app is running well on your staging environment
3. Run `kubectl describe pods` to see if the images on your staging and production environments are the same; then make sure that the image IDs and YAML scripts are the same
4. If the previous steps don’t show any discrepancies, check the logs, aggregating them to extract the most useful information if you need to
5. Identify the root cause by isolating the instance you find

### Examining Logs

It’s worth diving into those last two points a little further.

Fortunately, Kubernetes makes getting readable logs easy for you. You can download all your logs by integrating an external log aggregator, such as ELK Stack or Google Cloud’s operations suite (formerly Stackdriver).

That way, you can see which one of your instances is running into issues.

Then, once you pinpointed where the problem resides, you can use Kubernetes’ labels feature to drill down to the root cause.

Labels, in Kubernetes-speak, are key-value pairs attached to objects, such as a pod (a group of one or more containers). They specify object attributes that may be relevant to users but not necessarily the system semantics.

One of the tricks you can do with labels is to isolate a pod dynamically. You set the flag to whatever value makes. That means that you could tweak one or more labels of the pod to see what breaks and what doesn’t.

Using labels this way gives your troubleshooting more granularity.

### Monitor in Real Time

The best way to know which service is speaking to which is through constant monitoring of what’s going on in the application.

For example, you can use real-time visualization, which lets you see whether the services are interacting in the way you expect them to.

Two such visualization services are Weave Cloud and Google’s Cloud Trace (formerly Stackdriver Trace).

You can also monitor your microservices using our Prometheus connector, achieving complete observability of your system. And you can deploy it in just five minutes.

## Debug with Confidence

Troubleshooting and debugging microservices with Kubernetes can look daunting at first, but with an understanding of the techniques, you can do it. All you need is the confidence to explore and learn.

Learn more and get in touch to find out how we can help you take your monitoring to the next level.
