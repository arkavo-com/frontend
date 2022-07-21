export const selectors = {
    sectionTab: '.nav-link',
    loginButton: '[data-test-id=login-button]',
    logoutButton: '[data-test-id=logout-button]',
    loginScreen: {
        usernameField: '#username',
        passwordField: '#password',
        submitButton: '#kc-login'
    },
    secondaryHeader: 'h2',
    realmSelector: '#rc_select_0',
    attributesPage: {
        attributesHeader: {
            authorityDropdownButton: "#select-authorities-button",
            itemsQuantityIndicator: '.ant-pagination-total-text',
            sortByToolbarButton: "#sort-by-button",
            filtersToolbarButton: "#filters-button",
            filterModal: {
                ruleInputField: '#filter_rule',
                nameInputField: '#filter_name',
                orderInputField: '#filter_order',
                submitBtn: '#submit-filter-button',
                clearBtn: '#clear-filter-button'
            },
        },
        attributeDetailsSection: {
            editRuleButton: '#edit',
            closeDetailsSectionButton: "#close-details-button",
            ruleDropdown: '.attribute-rule__select',
            saveRuleButton: '#save-rule',
            cancelRuleSavingButton: '#cancel',
        },
        newSectionBtn: '.ant-collapse-header',
        newSection: {
            authorityField: '#authority',
            submitAuthorityBtn: '#authority-submit',
            attributeNameField: "#name",
            ruleField: '[data-test-id=rule-form-item]',
            ruleOptions: {
              hierarchical: '',
              permissive:'',
              restrictive: '',
            },
            orderField1: '#order_0',
            plusOrderButton: '#plus-order-button',
            minusOrderButton: '#minus-order-button',
            submitAttributeBtn: '#create-attribute-button',
        },
        attributeItem: '.ant-list-item',
    },
    entitlementsPage: {
        authorityNamespaceField:'#authority',
        attributeNameField: '#name',
        attributeValueField: '#value',
        submitAttributeButton: "#assign-submit",
        entityDetailsPage: {
            tableCell: '.ant-table-cell',
            tableRow: '.ant-table-row',
            deleteAttributeBtn: '.ant-btn-link >> nth=0',
            deleteAttributeModalBtn: '#delete-attr',
        }
    },
    alertMessage: '.Toastify__toast-body',
    tokenMessage: '.Toastify__toast'
}
