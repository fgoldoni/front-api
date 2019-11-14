import moment from 'moment'
import i18n from "@/i18n/i18n"

moment.locale(i18n.locale)

export default [
  {
    headerName: i18n.t('table.id'),
    field: 'id',
    filter: true,
    pinned: 'left',
    checkboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    headerCheckboxSelection: true
  },
  {
    headerName: i18n.t('table.email'),
    field: 'email',
    filter: true,
    pinned: 'left',
  },
  {
    headerName: i18n.t('table.full_name'),
    field: 'full_name',
    filter: true
  },
  {
    headerName: i18n.t('table.roles'),
    field: 'roles',
    filter: true,
    cellRendererFramework: 'roles'
  },
  {
    headerName: i18n.t('table.updated_at'),
    field: 'updated_at',
    filter: true,
    cellRenderer: function(params) {
      return (params.value == null)
          ? ''
          : moment(params.value, 'YYYY-MM-DD HH:mm:ss').format('D MMM YYYY')
    }
  },
  {
    headerName: i18n.t('table.created_at'),
    field: 'created_at',
    filter: true,
    cellRenderer: function(params) {
      return (params.value == null)
          ? ''
          : moment(params.value, 'YYYY-MM-DD HH:mm:ss').format('D MMM YYYY')
    }
  },
  {
    headerName: i18n.t('table.deleted_at'),
    field: 'deleted_at',
    filter: true,
    cellRenderer: function(params) {
      return (params.value == null)
          ? ''
          : moment(params.value, 'YYYY-MM-DD HH:mm:ss').format('D MMM YYYY')
    }
  },
  {
    headerName: i18n.t('table.actions'),
    sortable: false,
    pinned: 'right',
    cellRendererFramework: 'actions'
  }
]
