<template>
  <el-tabs>
    <el-tab-pane label="User" name="first">
      <ul>
        <li>
          <el-row justify="center" align="middle">
            <el-col>
              <!--              头像-->
            </el-col>

            <el-col>
              <!--              消息-->
              <el-row>
                <!--                消息标题-->
                <!--                标签-->
              </el-row>

              <el-row>
                <!--                消息内容-->
              </el-row>

              <el-row>
                <!--                消息时间-->
              </el-row>
            </el-col>
          </el-row>
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>

  <el-button-group>
    <el-button link :icon="Delete">清空</el-button>
    <el-button link :icon="More">更多</el-button>
  </el-button-group>
</template>

<script setup lang="tsx">
const Delete = () => <i class="'i-ep:delete'"></i>
const More = () => <i class="'i-ep:more'"></i>
</script>

<style scoped></style>
