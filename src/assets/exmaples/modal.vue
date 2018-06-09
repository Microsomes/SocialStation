<template>
  <div>
    <b-button @click="showModal">
      Open Modal
    </b-button>
    <b-modal ref="addafact" hide-footer title="Add a Fact to the neverendingfacts module">
      <p>hi</p>
     </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    showModal () {
      this.$refs.addafact.show()
    },
    hideModal () {
      this.$refs.addafact.hide()
    }
  }
}
</script>

<!-- modal-methods-1.vue -->