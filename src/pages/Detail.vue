<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div class="wrap">
    <div>
      <h1>车辆型号</h1>
      <p>
        指制造厂对具有同类型、品牌、种类、系列及车身型式的车辆所给予的名称。车辆车辆编码的内容有五部分：
      </p>
      <p>
        1、企业名称代号用2位汉语拼音表示。如：
        CA表示一汽、EQ表示二汽、BJ表示北京、NJ表示南京。
      </p>
      <p>
        2、车辆类别代号用1位阿拉伯数字表示。
        用1表示载重汽车；2表示越野汽车；3表示倾卸汽车；4表示牵引车；5表示特种车；
        6表示客车（大、中、小）；7表示轿车；8表示挂车；9表示半挂车、加长货挂车。
      </p>
      <p>
        3、主要参数代号用2位阿拉伯数字表示。
        ①在载重货车中，这两位数表示的是车辆总质量（车辆自重和载重量之和）；
        ②在轿车中这两位数表示的是汽车的排气量（单位：升）；
        ③客车中这两位数表示的是车身长度（单位：m）。
      </p>
      <p>
        4、产品序号用1位阿拉伯数字表示。用0、1、2分别表示车型的改动及改型情况。
      </p>
      <p>5、企业自定代号。</p>
    </div>
    <table>
      <thead>
        <td>车辆型号</td>
        <td>型号拆解</td>
      </thead>
      <tbody>
        <tr>
          <td>DHW7155FSHEV</td>
          <td>
            DHW(东风本田) 7(轿车) 15(1.5L) 5(第6代-享域净适版) FS
            HEV(不插电混动)
          </td>
        </tr>
        <tr>
          <td>DHW7156FSHEV</td>
          <td>
            DHW(东风本田) 7(轿车) 15(1.5L) 6(第7代-享域净畅版) FS
            HEV(不插电混动)
          </td>
        </tr>
        <tr>
          <td>DHW7157FSHEV</td>
          <td>
            DHW(东风本田) 7(轿车) 15(1.5L) 6(第8代-享域净享版) FS
            HEV(不插电混动)
          </td>
        </tr>
        <tr>
          <td>DHW7158FSHEV</td>
          <td>
            DHW(东风本田) 7(轿车) 15(1.5L) 6(第9代-享域净耀版) FS
            HEV(不插电混动)
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
table td {
  margin: 0;
  padding: 10px;
  border: 1px slategray solid;
  border-spacing: 0;
}
.wrap {
  padding: 20px;
}
</style>