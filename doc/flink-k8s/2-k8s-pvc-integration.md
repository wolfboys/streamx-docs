---
title: 'K8s PVC Usage'
sidebar: true
author: 'Al-assad'
original: true
time: 2021/09/28
---

## K8s PVC Resource Usage

The current version of StreamX Flink-K8s task has support for PVC resources based on Flink k8s-pod-template. Streamx supports editing `pod-template`, `jm-pod-template`, `tm-pod-template` configurations directly on the UI page.

<br/>

The following is a simple example, assuming that two PVCs, `flink-checkpoint` and `flink-savepoint`, have been created in advance.

![image-20210927215912190](http://assets.streamxhub.com/k8s_pvc.png)

pod-template configuration:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-template
spec:
  containers:
    - name: flink-main-container
      volumeMounts:
        - name: checkpoint-pvc
          mountPath: /opt/flink/checkpoints
        - name: savepoint-pvc
          mountPath: /opt/flink/savepoints
  volumes:
    - name: checkpoint-pvc
      persistentVolumeClaim:
        claimName: flink-checkpoint
    - name: savepoint-pvc
      persistentVolumeClaim:
        claimName: flink-savepoint
```

Since `rockdb-backend` is used, there are 3 ways to provide this dependency:

1. The Flink Base Docker Image provided already contains this dependency.

2. Place the `flink-statebackend-rocksdb_xx.jar` in the StreamX local directory `Workspace/jars`.

3. Add the `rockdb-backend ` coordinate to the Dependency configuration of the StreamX page (at this point StreamX will automatically resolve the dependency conflict):

   ![image-20210927220203314](http://assets.streamxhub.com/rocksdb_dependency.png)

