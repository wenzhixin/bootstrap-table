/// <reference types="jquery" />

interface BootstrapTableClasses{
    buttons: string;
    buttonsGroup: string;
    inputGroup: string;
    buttonsPrefix: string;
    paginationActive: string;
    buttonActive: string;
    dropdownActive: string;
    pull: string;
    input: string;
    dropup: string;
    buttonsDropdown: string;
    paginationDropdown: string;
    inputPrefix: string
}

// eslint-disable-next-line no-unused-vars
interface BootstrapTableHtml{
    searchInput: string;
    searchButton: string;
    pagination: string[];
    pageDropdown: string[];
    inputGroup: string;
    toolbarDropdown: string[];
    icon: string;
    pageDropdownItem: string;
    paginationItem: string;
    toolbarDropdownSeparator: string;
    dropdownCaret: string;
    searchClearButton: string;
    toolbarDropdownItem: string
}

interface BootstrapTableIcons{
    toggleOff: string;
    clearSearch: string;
    detailOpen: string;
    search: string;
    fullscreen: string;
    columns: string;
    detailClose: string;
    refresh: string;
    paginationSwitchDown: string;
    paginationSwitchUp: string;
    toggleOn: string
}

interface BootstrapTableEvents{
    'refresh.bs.table': string;
    'load-error.bs.table': string;
    'click-row.bs.table': string;
    'dbl-click-row.bs.table': string;
    'post-body.bs.table': string;
    'collapse-row.bs.table': string;
    'reset-view.bs.table': string;
    'click-cell.bs.table': string;
    'check-all.bs.table': string;
    'post-footer.bs.table': string;
    'uncheck.bs.table': string;
    'check-some.bs.table': string;
    'refresh-options.bs.table': string;
    'pre-body.bs.table': string;
    'uncheck-some.bs.table': string;
    'expand-row.bs.table': string;
    'all.bs.table': string;
    'uncheck-all.bs.table': string;
    'column-switch.bs.table': string;
    'check.bs.table': string;
    'search.bs.table': string;
    'load-success.bs.table': string;
    'dbl-click-cell.bs.table': string;
    'page-change.bs.table': string;
    'post-header.bs.table': string;
    'toggle.bs.table': string;
    'sort.bs.table': string;
    'scroll-body.bs.table': string
}

interface BootstrapTableColumn{
    sortName?: any;
    widthUnit?: string;
    sorter?: any;
    searchFormatter?: boolean;
    titleTooltip?: any;
    falign?: any;
    title?: any;
    align?: any;
    radio?: boolean;
    colspan?: any;
    showSelectTitle?: boolean;
    rowspan?: any;
    checkbox?: boolean;
    halign?: any;
    switchable?: boolean;
    class?: any;
    escape?: boolean;
    events?: BootstrapTableEvents;
    order?: string;
    visible?: boolean;
    detailFormatter?: any;
    valign?: any;
    sortable?: boolean;
    cellStyle?: any;
    searchable?: boolean;
    footerFormatter?: any;
    formatter?: any;
    checkboxEnabled?: boolean;
    field?: any;
    width?: any;
    clickToSelect?: boolean;
    searchHighlightFormatter?: boolean;
    cardVisible?: boolean
}

interface BootstrapTableLocale{
    formatPaginationSwitchDown?: () => string;

    formatColumns?: () => string;

    formatAllRows?: () => string;

    formatLoadingMessage?: () => string;

    formatSRPaginationPreText?: () => string;

    formatPaginationSwitch?: () => string;

    formatDetailPagination?: (totalRows: number) => string;

    formatNoMatches?: () => string;

    formatSRPaginationNextText?: () => string;

    formatSearch?: () => string;

    formatFullscreen?: () => string;

    formatShowingRows?: (pageFrom: number, pageTo: number, totalRows: number, totalNotFiltered: number) => string;
    formatSRPaginationPageText?: (page: number) => string;

    formatClearSearch?: () => string;

    formatPaginationSwitchUp?: () => string;

    formatToggle?: () => string;

    formatToggleOff?: () => string;

    formatColumnsToggleAll?: () => string;

    formatRefresh?: () => string;

    formatToggleOn?: () => string;

    formatRecordsPerPage(pageNumber: number): string
}

interface BootstrapAjaxParams{
    cache: boolean;
    data: {
        search: string;
        offset: number;
        limit: number;
        sort?: any;
        order?: any
    };
    dataType: string;
    type: string;
    contentType: string;
    error: (jqXHR: JQueryXHR) => any;
    success: (results: any, textStatus?: string, jqXHR?: JQueryXHR) => any;
}

interface BootstrapTableOptions{
    onCheck?: (row: any, $element: JQuery<HTMLElement>) => boolean;
    loadingFontSize?: string;
    onDblClickCell?: (field: string, value: any, row: any, $element: JQuery<HTMLElement>) => boolean;
    rowStyle?: (row: any, index: number) => {};
    showColumnsToggleAll?: boolean;
    footerStyle?: (column: BootstrapTableColumn) => {};
    onUncheck?: (row: any, $element: JQuery<HTMLElement>) => boolean;
    pageSize?: number;
    footerField?: string;
    showFullscreen?: boolean;
    sortStable?: boolean;
    searchAlign?: string;
    ajax?: (params: BootstrapAjaxParams) => any;
    onAll?: (name: string, args: any) => boolean;
    onClickRow?: (row: any, $element: JQuery<HTMLElement>, field: string) => boolean;
    ajaxOptions?: {};
    onCheckSome?: (rows: any[]) => boolean;
    customSort?: any;
    iconSize?: any;
    onCollapseRow?: (index: number, row: any, detailView: any) => boolean;
    searchHighlight?: boolean;
    height?: any;
    onUncheckSome?: (rows: any[]) => boolean;
    onToggle?: (cardView: boolean) => boolean;
    ignoreClickToSelectOn?: ({tagName}?: {tagName: any}) => any;
    cache?: boolean;
    method?: string;
    onColumnSwitch?: (field: string, checked: boolean) => boolean;
    searchSelector?: boolean;
    strictSearch?: boolean;
    multipleSelectRow?: boolean;
    onLoadError?: (status: string, jqXHR: JQuery.jqXHR) => boolean;
    buttonsToolbar?: any;
    paginationVAlign?: string;
    showColumnsSearch?: boolean;
    queryParamsType?: string;
    sortOrder?: any;
    paginationDetailHAlign?: string;
    customSearch?: any;
    visibleSearch?: boolean;
    showButtonText?: boolean;
    sortName?: any;
    columns?: BootstrapTableColumn[];
    onScrollBody?: () => boolean;
    iconsPrefix?: string;
    onPostBody?: () => boolean;
    search?: boolean;
    searchOnEnterKey?: boolean;
    searchText?: string;
    responseHandler?: (res: any) => any;
    toolbarAlign?: string;
    paginationParts?: string[];
    cardView?: boolean;
    showSearchButton?: boolean;
    escape?: boolean;
    searchTimeOut?: number;
    buttonsAlign?: string;
    buttonsOrder?: string[];
    detailFormatter?: (index: number, row: any, $element: JQuery<HTMLElement>) => string;
    onDblClickRow?: (row: any, $element: JQuery<HTMLElement>, field: string) => boolean;
    paginationNextText?: string;
    buttonsPrefix?: string;
    loadingTemplate?: (loadingMessage: string) => string;
    theadClasses?: string;
    onLoadSuccess?: (data: any, status: string, jqXHR: JQuery.jqXHR) => boolean;
    url?: any;
    toolbar?: any;
    onPostHeader?: () => boolean;
    sidePagination?: string;
    clickToSelect?: boolean;
    virtualScrollItemHeight?: any;
    rowAttributes?: (row: any, index: number) => {};
    dataField?: string;
    idField?: string;
    onSort?: (name: string, order: number) => boolean;
    pageNumber?: number;
    data?: any[];
    totalNotFilteredField?: string;
    undefinedText?: string;
    onSearch?: (text: string) => boolean;
    onPageChange?: (number: number, size: number) => boolean;
    paginationUseIntermediate?: boolean;
    searchAccentNeutralise?: boolean;
    singleSelect?: boolean;
    showButtonIcons?: boolean;
    showPaginationSwitch?: boolean;
    onPreBody?: (data: any) => boolean;
    detailFilter?: (index: number, row: any) => boolean;
    detailViewByClick?: boolean;
    totalField?: string;
    contentType?: string;
    showColumns?: boolean;
    totalNotFiltered?: number;
    checkboxHeader?: boolean;
    onRefresh?: (params: any[]) => boolean;
    dataType?: string;
    paginationPreText?: string;
    showToggle?: boolean;
    detailView?: boolean;
    serverSort?: boolean;
    totalRows?: number;
    silentSort?: boolean;
    onPostFooter?: () => boolean;
    selectItemName?: string;
    detailViewIcon?: boolean;
    detailViewAlign?: string;
    minimumCountColumns?: number;
    uniqueId?: any;
    onResetView?: () => boolean;
    paginationHAlign?: string;
    sortClass?: any;
    pagination?: boolean;
    queryParams?: (params: any) => any;
    paginationSuccessivelySize?: number;
    classes?: BootstrapTableClasses;
    rememberOrder?: boolean;
    paginationPagesBySide?: number;
    trimOnSearch?: boolean;
    showRefresh?: boolean;
    locale?: BootstrapTableLocale;
    onCheckAll?: (rowsAfter: any[], rowsBefore: any[]) => boolean;
    showFooter?: boolean;
    headerStyle?: (column: BootstrapTableColumn) => {};
    maintainMetaData?: boolean;
    onRefreshOptions?: (options: BootstrapTableOptions) => boolean;
    showExtendedPagination?: boolean;
    smartDisplay?: boolean;
    paginationLoop?: boolean;
    virtualScroll?: boolean;
    sortReset?: boolean;
    filterOptions?: {filterAlgorithm: string};
    onUncheckAll?: (rowsAfter: any[], rowsBefore: any[]) => boolean;
    showSearchClearButton?: boolean;
    buttons?: {};
    showHeader?: boolean;
    onClickCell?: (field: string, value: any, row: any, $element: JQuery<HTMLElement>) => boolean;
    sortable?: boolean;
    icons?: BootstrapTableIcons;
    onExpandRow?: (index: number, row: any, $detail: JQuery<HTMLElement>) => boolean;
    buttonsClass?: string;
    pageList?: number[];
}

interface JQuery{
    bootstrapTable(options: BootstrapTableOptions): JQuery;

    bootstrapTable(method: string, ...parameters: any[]): JQuery | any;
}
