<template>
  <div class="p-6 mobile:p-4 mobile:text-xl max-w-xl w-full max-h-full bg-white">
    <div class="mb-6 mobile:mb-4 flex justify-between items-center rounded-sm">
      <button class="text-xl flex items-center" :title="$t('A11Y.BACK')" @click="back">
        <icon aria-hidden="true" type="arrow-to-left" class="mr-2" />
        <span>{{ $t('BACK_TO_LIST') }}</span>
      </button>
      <button :title="$t('A11Y.CLOSE')" @click="close">
        <icon aria-hidden="true" type="close" />
      </button>
    </div>
    <divider class="mb-6" :color="shadeBase"></divider>
    <finish-card class="text-base" />
  </div>
</template>

<script>
import { mapState } from 'redux-vuex'
import Icon from '@podlove/components/icons'
import Divider from '@podlove/components/divider'
import { compose } from 'ramda'
import FinishCard from 'components/finish-card'
import store from 'store'
import * as select from 'store/selectors'
import * as overlay from '@podlove/button-actions/overlay'
import * as list from '@podlove/button-actions/list'

export default {
  components: {
    Icon,
    Divider,
    FinishCard
  },
  data: mapState({
    overlay: select.view.overlay,
    font: select.theme.fontCi,
    shadeBase: select.theme.shadeBase,
    listView: select.view.list,
    finishView: select.view.finish
  }),
  methods: {
    close: compose(store.dispatch, overlay.hide),
    back: compose(store.dispatch, list.show)
  }
}
</script>
