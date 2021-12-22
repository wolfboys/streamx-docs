<template>
  <div>
    <table class="table" v-if="name ==='option'" style="width: 100%;display: inline-table">
      <thead>
      <tr>
        <td style="width: 45px">短参数</td>
        <td>完整参数(前缀"--")</td>
        <td style="width: 30px">有效</td>
        <td>取值范围值或类型</td>
        <td>作用描述</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in option" :key="name.concat(index)">
        <td>{{ item.opt }}</td>
        <td>{{ item.longOpt }}</td>
        <td>
          <span class="fa fa-check" v-if="!item.deprecated" style="color:green"></span>
          <span class="fa fa-times" v-else style="color: red"></span>
        </td>
        <td>{{ item.value }}</td>
        <td>{{ item.desc }}</td>
      </tr>
      </tbody>
    </table>
    <table class="table" v-if="name==='property'" style="width: 100%;display: inline-table">
      <thead>
      <tr>
        <td>参数名称</td>
        <td>作用描述</td>
        <td>是否必须</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in property" :key="name.concat(index)">
        <td>
          <span class="label-info">{{ item.name }}</span>
          <i class="fa fa-copy" v-clipboard:copy="item.name" v-clipboard:success="onCopy" v-clipboard:error="onError"></i>
        </td>
        <td>{{ item.desc }}</td>
        <td>
          <span class="fa fa-toggle-on" v-if="item.required" style="color:green" title="必须"></span>
          <span class="fa fa-toggle-off" v-else style="color: gray" title="可选"></span>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table" v-if="name==='memory'" style="width: 100%;display: inline-table">
      <thead>
      <tr>
        <td style="width: 380px;">参数名称</td>
        <td>作用描述</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in memory" :key="name.concat(index)">
        <td>
          <span class="label-info">{{ item.name }}</span>
          <i class="fa fa-copy" v-clipboard:copy="item.name" v-clipboard:success="onCopy" v-clipboard:error="onError"></i>
        </td>
        <td>{{ item.desc }}</td>
      </tr>
      </tbody>
    </table>
    <table class="table" v-if="name==='totalMem'" style="width: 100%;display: inline-table">
      <thead>
      <tr>
        <td>配置项</td>
        <td>TaskManager 配置参数</td>
        <td>JobManager 配置参数</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in totalMem" :key="name.concat(index)">
        <td>{{ item.group }}</td>
        <td>
          <span class="label-info">{{ item.tm }}</span>
          <i class="fa fa-copy" v-clipboard:copy="item.tm" v-clipboard:success="onCopy" v-clipboard:error="onError"></i>
        </td>
        <td>
          <span class="label-info">{{ item.jm }}</span>
          <i class="fa fa-copy" v-clipboard:copy="item.jm" v-clipboard:success="onCopy" v-clipboard:error="onError"></i>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="table" v-if="name==='checkpoints'" style="width: 100%;display: inline-table">
      <thead>
      <tr>
        <td>配置项</td>
        <td>作用描述</td>
        <td>参数值或类型</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in checkpoints" :key="name.concat(index)">
        <td>
          <span class="label-info">{{ item.name }}</span>
          <i class="fa fa-copy" v-clipboard:copy="item.name" v-clipboard:success="onCopy" v-clipboard:error="onError"></i>
        </td>
        <td>{{ item.desc }}</td>
        <td>{{ item.value }}</td>
      </tr>
      </tbody>
    </table>
    <table class="table" v-if="name==='backend'" style="width: 100%;display: inline-table">
      <thead>
      <tr>
        <td>配置项</td>
        <td>作用描述</td>
        <td>参数值或类型</td>
        <td>该配置在哪种类型下有效</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in backend" :key="name.concat(index)">
        <td>
          <span class="label-info">{{ item.name }}</span>
          <i class="fa fa-copy" v-clipboard:copy="item.name" v-clipboard:success="onCopy" v-clipboard:error="onError"></i>
        </td>
        <td>{{ item.desc }}</td>
        <td>{{ item.value }}</td>
        <td>{{ item.mode }}</td>
      </tr>
      </tbody>
    </table>

    <table class="table" v-if="name==='fixed-delay'" style="width: 100%;display: inline-table">
      <thead>
      <tr>
        <td>配置项</td>
        <td>作用描述</td>
        <td>参数值或单位</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in fixedDelay" :key="name.concat(index)">
        <td>
          <span class="label-info">{{ item.name }}</span>
          <i class="fa fa-copy" v-clipboard:copy="item.name" v-clipboard:success="onCopy" v-clipboard:error="onError"></i>
        </td>
        <td>{{ item.desc }}</td>
        <td>{{ item.value }}</td>
      </tr>
      </tbody>
    </table>

    <table class="table" v-if="name==='failure-rate'" style="width: 100%;display: inline-table">
      <thead>
      <tr>
        <td>配置项</td>
        <td>作用描述</td>
        <td>参数值或单位</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in failureRate" :key="name.concat(index)">
        <td>
          <span class="label-info">{{ item.name }}</span>
          <i class="fa fa-copy" v-clipboard:copy="item.name" v-clipboard:success="onCopy" v-clipboard:error="onError"></i>
        </td>
        <td>{{ item.desc }}</td>
        <td>{{ item.value }}</td>
      </tr>
      </tbody>
    </table>

    <table class="table" v-if="name==='tables'" style="width: 100%;display: inline-table">
      <thead>
      <tr>
        <td>配置项</td>
        <td>作用描述</td>
        <td>参数值</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in tables" :key="name.concat(index)">
        <td>
          <span class="label-info">{{ item.name }}</span>
          <i class="fa fa-copy" v-clipboard:copy="item.name" v-clipboard:success="onCopy" v-clipboard:error="onError"></i>
        </td>
        <td>{{ item.desc }}</td>
        <td>{{ item.value }}</td>
      </tr>
      </tbody>
    </table>

    <table class="envs" v-if="name==='envs'" style="width: 100%;display: inline-table">
      <thead>
        <tr>
          <td>要求</td>
          <td>版本</td>
          <td>是否必须</td>
          <td>其他事项</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in envs" :key="'envs'.concat(index)">
          <td>
            <span class="label-info">{{ item.name }}</span>
          </td>
          <td>{{ item.version }}</td>
          <td>
            <span class="fa fa-toggle-on" v-if="item.required" style="color:green" title="必须"></span>
            <span class="fa fa-toggle-off" v-else style="color: gray" title="可选"></span>
          </td>
          <td>{{ item.other }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  props: {name},
  data() {
    return {
      copying: false,
      option: [
        {
          opt: '-t',
          longOpt: 'target',
          desc: '部署方式(目前只支持yarn-per-job,application)',
          deprecated: false,
          value: ' yarn-per-job | application '
        },
        {opt: '-d', longOpt: 'detached', desc: '是否以detached模式启动', deprecated: false, value: "true | false"},
        {
          opt: '-n',
          longOpt: 'allowNonRestoredState',
          desc: '从savePoint恢复失败时是否允许跳过该步骤',
          deprecated: false,
          value: "true | false"
        },
        {
          opt: '-sae',
          longOpt: 'shutdownOnAttachedExit',
          desc: 'attached模式下任务停止时是否关闭集群',
          deprecated: false,
          value: "true | false"
        },
        {
          opt: '-m',
          longOpt: 'jobmanager',
          desc: 'JobManager的连接地址',
          deprecated: false,
          value: "yarn-cluster | 连接地址"
        },
        {opt: '-p', longOpt: 'parallelism', desc: '程序并行度', deprecated: true, value: 'int'},
        {opt: '-c', longOpt: 'class', desc: '程序的main方法的全名称', deprecated: true, value: 'String'},
      ],
      property: [
        {name: '$internal.application.main', desc: '程序的主类(main)的完整类名', required: true},
        {name: 'yarn.application.name', desc: '程序的名称(YARN中显示的任务名称)', required: true},
        {name: 'yarn.application.queue', desc: '在YARN中运行的队列名称', required: false},
        {name: 'taskmanager.numberOfTaskSlots', desc: 'taskmanager Slot的数量', required: false},
        {name: 'parallelism.default', desc: '程序的并行', required: false}
      ],
      memory: [
        {group: 'JVM 堆内存', name: 'jobmanager.memory.heap.size', desc: 'JobManager 的 JVM 堆内存'},
        {group: '堆外内存', name: 'jobmanager.memory.off-heap.size', desc: 'JobManager 的堆外内存(直接内存或本地内存)'},
        {group: 'JVM Metaspace', name: 'jobmanager.memory.jvm-metaspace.size', desc: 'Flink JVM进程的Metaspace'},
        {group: 'JVM Metaspace', name: 'jobmanager.memory.jvm-metaspace.size', desc: 'Flink JVM进程的Metaspace'},
        {group: 'JVM Metaspace', name: 'jobmanager.memory.jvm-overhead.min', desc: 'Flink JVM进程的Metaspace'},
        {group: 'JVM 开销', name: 'jobmanager.memory.jvm-metaspace.size', desc: '用于其他 JVM 开销的本地内存'},
        {group: 'JVM 开销', name: 'jobmanager.memory.jvm-overhead.max', desc: '用于其他 JVM 开销的本地内存'},
        {group: 'JVM 开销', name: 'jobmanager.memory.jvm-overhead.fraction', desc: '用于其他 JVM开销的本地内存'},
        {group: '框架堆内存', name: 'taskmanager.memory.framework.heap.size', desc: '用于Flink 框架的JVM堆内存(进阶配置)'},
        {group: '任务堆内存', name: 'taskmanager.memory.task.heap.size', desc: '由Flink管理的用于排序,哈希表,缓存状态后端的本地内存'},
        {group: '托管内存', name: 'taskmanager.memory.managed.size', desc: '用于其他 JVM 开销的本地内存'},
        {group: '托管内存', name: 'taskmanager.memory.managed.fraction', desc: '用于其他 JVM 开销的本地内存'},
        {
          group: '框架堆外内存',
          name: 'taskmanager.memory.framework.off-heap.size',
          desc: '用于Flink框架的堆外内存(直接内存或本地内存)进阶配置'
        },
        {
          group: '任务堆外内存',
          name: 'taskmanager.memory.task.off-heap.size',
          desc: '用于Flink应用的算子及用户代码的堆外内存(直接内存或本地内存)'
        },
        {group: 'JVM Metaspace', name: 'taskmanager.memory.jvm-metaspace.size', desc: 'Flink JVM 进程的 Metaspace'}
      ],
      totalMem: [
        {group: 'Flink 总内存 ', tm: 'taskmanager.memory.flink.size', jm: 'jobmanager.memory.flink.size'},
        {group: '进程总内存', tm: 'taskmanager.memory.process.size', jm: 'jobmanager.memory.process.size'}
      ],
      checkpoints: [
        {name: 'enable', desc: '是否开启checkpoint', value: 'true | false'},
        {name: 'interval', desc: 'checkpoint的间隔周期', value: '毫秒'},
        {name: 'mode', desc: '语义', value: ' EXACTLY_ONCE | AT_LEAST_ONCE '},
        {name: 'timeout', desc: '超时时间', value: '毫秒'},
        {name: 'unaligned', desc: '是否非对齐', value: 'true | false'},
      ],
      backend: [
        {name: 'value', desc: 'backend具体存储的类型', value: 'jobmanager | filesystem | rocksdb', mode: ''},
        {name: 'memory', desc: '针对jobmanager有效,最大内存', value: 'kb如(5242880)', mode: 'jobmanager'},
        {name: 'async', desc: '是否开启异步', value: ' true | false', mode: 'jobmanager | filesystem'},
        {name: 'incremental', desc: '是否开启增量', value: ' true | false', mode: 'rocksdb'},
      ],
      fixedDelay: [
        {name: 'attempts', desc: '在Job最终宣告失败之前,Flink尝试重启的次数', value: '3'},
        {name: 'delay', desc: '一个任务失败之后不会立即重启,这里指定间隔多长时间重启', value: '无 | s | m | min | h | d'},
      ],
      failureRate: [
        {name: 'max-failures-per-interval', desc: '在一个Job认定为失败之前,最大的重启次数', value: '3'},
        {name: 'failure-rate-interval', desc: '计算失败率的时间间隔', value: '无 | s | m | min | h | d'},
        {name: 'delay', desc: '两次连续重启尝试之间的时间间隔', value: '无 | s | m | min | h | d'}
      ],
      tables: [
        {name: 'planner', desc: 'Table Planner', value: 'blink | old | any' },
        {name: 'mode', desc: 'Table Mode', value: 'streaming | batch'},
        {name: 'catalog', desc: '指定catalog,如指定初始化时会使用到',value:''},
        {name: 'database', desc: '指定database,如指定初始化时会使用到',value:''},
      ],
      envs: [
        {name: '操作系统',version: 'Linux', required: true, other: '不支持Window系统'},
        {name: 'JAVA',version: '1.8+', required: true, other: null},
        {name: 'Maven',version: '3+', required: true, other: '部署机器必须安装Maven,且配置好环境变量(项目编译会用到)'},
        {name: 'Node.js',version: '', required: true, other: 'NodeJs相关环境'},
        {name: 'Flink',version: '1.12.0+', required: true, other: '版本必须是1.12.x或以上版本'},
        {name: 'Hadoop',version: '2+', required: false, other: '可选,如果on yarn则需要hadoop环境,并且配置好相关环境变量'},
        {name: 'MySQL',version: '5.6+', required: false, other: '部署机器或者其他机器安装MySQL'},
        {name: 'Python',version: '2+', required: false, other: '可选,火焰图功能会用到Python'},
        {name: 'Perl',version: '5.16.3+', required: false, other: '可选,火焰图功能会用到Perl'}
      ],
    }
  },
  methods: {
    onCopy: function (e) {
      document.querySelector('#message-container').innerHTML='<div class="message move-in" v-if="copying">\n' +
          '        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"\n' +
          '             width="16"\n' +
          '             height="16"\n' +
          '             fill="#06a35a">\n' +
          '          <path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"></path>\n' +
          '        </svg>\n' +
          '        <span>复制成功 🎉</span>\n' +
          '      </div>'
      setTimeout(() => document.querySelector('#message-container').innerHTML='',2000)
    },

    onError: function (e) {
      alert('Failed to copy')
    }
  }
}
</script>
