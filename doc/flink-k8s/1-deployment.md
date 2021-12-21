---
title: 'Flink Kubernetes Integration'
sidebar: true
author: 'Al-assad'
original: true
time: 2021/09/28
---

StreamX Flink Kubernetes Integration is based on [Flink Native Kubernetes](https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes/), and supports the following Flink-Native-K8s runtime mode:

* Native-Kubernetes Application
* Native-Kubernetes Session

Currently, a single StreamX application instance supports only a single Kubernetes cluster.

<br/>

## Additional Software Environment

StreamX Flink- K8s Integration requires the following additional software environment: 

* Kubernetes
* Maven（StreamX running machines require）
* Docker（StreamX running machines require）

StreamX instance do not need to be mandatorily deployed on the Kubernetes nodes. It can be deployed on the machine external to the Kubernetes cluster, just needs to be open to networks communication with the Kubernetes cluster.

<br/>


## Deployment Preparation

### Kubernetes Access

StreamX uses system file `～/.kube/config` directly as the connection credential for Kubernetes cluster. An easy way to do this is to copy the `～/.kube/config` from K8s node to user directory of StreamX node directly. Of course, you can generate conf file for K8s custom accounts to further constrain permission.

After that, you can quickly check the connectivity of the target K8s cluster via `kubectl` on machine where StreamX was deployed:

```shell
kubectl cluster-info
```

### Kubernetes RBAC

The K8s RBAC resource used by Flink need to be created in advance, as described in the Flink Document. Refer to: https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes/#rbac

Assuming that Flink uses a k8s namespace of `flink-dev` and does not explicitly specify K8s account, you can create a simple 		`clusterrolebinding` resource as follows:

```
kubectl create clusterrolebinding flink-role-binding-default --clusterrole=edit --serviceaccount=flink-dev:default
```

### Remote Docker Register Service

You need to configure the connection information for the remote Docker register service on the Settings page of StreamX.

![image-20210927182540478](/streamx-docs/assets/img/core-img/docker_register_setting.png)

You need to create a namespace named `streamx` in remote docker register repository. The docker image automatically built by StreamX will be pushed to this namespace, so make sure that the *Docker Register User* has `pull` and `push` permissions for this namespace.

Quick test using Docker command-line tool:

```shell
# verify access
docker login --username=<your_username> <your_register_addr>
# verify push permission
docker pull busybox
docker tag busybox <your_register_addr>/streamx/busybox
docker push <your_register_addr>/streamx/busybox
# verify pull permission
docker pull <your_register_addr>/streamx/busybox
```

<br/>

## Flink Job Submission

### Flink-Application Job

![image-20210927203759713](/streamx-docs/assets/img/core-img/k8s_application_submit.png)

The configuration to be specified are the following:

* **Flink Base Docker Image**： Tag of the base Flink Docker image can be obtained from [DockerHub - offical/flink](https://hub.docker.com/_/flink), and also supports the user's private image.
* **Rest-Service Exposed Type**：Corresponds to the Flink native configuration of  [kubernetes.rest-service.exposed.type](https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/config/#kubernetes):
  * `ClusterIP`：Requires StreamX for direct access to the K8s internal network;
  * `LoadBalancer`：Requires K8s to create the LoadBalancer resource in advance while StreamX can access to that LoadBalancer gateway.
  * `NodePort`：Requires StreamX to be allowed to connect to all K8s nodes directly.
* **Kubernetes Pod Template**： Flink custom k8s pod-template configuration.

When a Flink job is started, the Flink Web UI page can be accessed directly from the Detail page of StreamX:

![image-20210927210034861](/streamx-docs/assets/img/core-img/k8s_app_detail.png)

### Flink-Session Job

The additional configuration of Flink-Native-Kubernetes Session job (e.g pod-template)  is entirely determined by the Flink-Session cluster deployed in advance, please refer to Flink Document: https://ci.apache.org/projects/flink/flink-docs-stable/docs/deployment/resource-providers/native_kubernetes

<br/>

## Related Configuration

The Flink-K8s-Integration related configuration of StreamX in application.yaml are as follows:

| Key                                                          | Description                                                  | Default Value |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------- |
| streamx.docker.register.image-namespace                      | Default namespace of remote docker register service repository. | steramx       |
| streamx.flink-k8s.tracking.polling-task-timeout-sec.job-status | Execution timeou for each group of flink state tracking tasks. | 120           |
| streamx.flink-k8s.tracking.polling-task-timeout-sec.cluster-metric | Execution timeout for each group of flink metrics tracking tasks. | 120           |
| streamx.flink-k8s.tracking.polling-interval-sec.job-status   | Execution interval for each group of flink state tracking tasks. | 5             |
| streamx.flink-k8s.tracking.polling-interval-sec.cluster-metric | Execution interval for each group of flink metrics tracking tasks | 10            |
| streamx.flink-k8s.tracking.silent-state-keep-sec             | Trace fault tolerance time for Slient state.                 | 60            |

