<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <!-- 左边配置列表选择区域 -->
      <v-flex d-flex xs12 sm12 md2>
        <v-card class="left-apps">
          <v-toolbar dark>
            <v-text-field append-icon="search">
            </v-text-field>
          </v-toolbar>
          <v-list>
            <v-list-tile @click="">
              <v-list-tile-content>
                <v-list-tile-title>meme</v-list-tile-title>
                <v-list-tile-sub-title>dev</v-list-tile-sub-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-content>
                <v-list-tile-title>meme</v-list-tile-title>
                <v-list-tile-sub-title>dev</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-content>
                <v-list-tile-title>meme</v-list-tile-title>
                <v-list-tile-sub-title>dev</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>

          </v-list>
        </v-card>
      </v-flex>

      <!-- 右边操作区域 -->
      <v-flex d-flex xs12 sm12 md10>
        <v-layout row wrap>
          <!-- 按钮操作区域 -->
          <v-flex d-flex xs12>
            <v-card class="ops-area">
              <div style="float: left">
                INFO
              </div>
              <div style="float: right">
                <v-btn color="success">保存</v-btn>
              </div>
            </v-card>
          </v-flex>

          <!-- 编辑区域 -->
          <v-flex d-flex xs12>
            <div class="editor" ref="codeEditor"/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "AppContentEdit",
    data: () => ({
      editor: null,
      submitBtnDisabled: true,
      app: {}
    }),
    mounted() {
      this.initEditor()
    },
    methods: {
      initEditor() {
        window.require.config({paths: {'vs': '/monaco-editor/min/vs'}})
        window.require(['vs/editor/editor.main'], () => {
          let e = monaco.editor.create(this.$refs.codeEditor, {
            value: this.app.content,
            theme: 'vs-dark',
            language: 'yaml',
            mouseWheelZoom: true
          })

          e.getModel().updateOptions({tabSize: 2})

          e.onDidChangeModelContent(this.changeContent)
          e.focus()
          this.editor = e
        })
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .left-apps
    height calc(100vh - 60px - 48px - 4px)

  .ops-area
    height 48px

  .editor
    height calc(100vh - 60px - 48px - 48px - 8px - 8px)
    width 100%
    box-sizing border-box

</style>
