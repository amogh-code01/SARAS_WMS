
const ALL_SECTIONS = [
  /* ── Order Information ── */
  { id:'f-wo',  label:'W/O #',  group:'Order Information',  elId:'wo'  },
  { id:'f-podate',  label:'W/O Created Date',  group:'Order Information',  elId:'po-entry-date' },
  { id:'f-customer',  label:'Customer Name',  group:'Order Information',  elId:'customer'  },
  { id:'f-division',  label:'Division',  group:'Order Information',  elId:'division'  },
  { id:'f-priority',  label:'Priority',  group:'Order Information',  elId:'priority'  },
  { id:'f-coating',  label:'Coating Required',  group:'Order Information',  elId:'coating'  },
  { id:'f-electrode',   label:'Electrode Required',  group:'Order Information',  elId:'electrode'  },
  { id:'f-orderqty',  label:'Order Qty',  group:'Order Information',  elId:'orderqty'  },
  { id:'f-ordervalue',  label:'Order Value (₹)',  group:'Order Information',  elId:'ordervalue'  },
  { id:'f-poadvance',   label:'P.O Advance Received',   group:'Order Information',  elId:'po-advance'  },
  { id:'f-trail',  label:'Trail',  group:'Order Information',  elId:'trail'  },
  { id:'f-design',  label:'Design',  group:'Order Information',  elId:'design'  },
  /* ── Store Blanks ── */
  { id:'f-storeblanks', label:'Store Blanks AQTY',  group:'Store Blanks',  elId:'storeblanks'   },
  { id:'f-shortage',  label:'Shortage of Store Blank',group:'Store Blanks',  elId:'shortage'  },
  { id:'f-binnum',  label:'Bin Number',  group:'Store Blanks',  elId:'binNumber'  },
  { id:'f-rcvdstatus',  label:'Received Shortage Status',group:'Store Blanks',  elId:'rcvd-shortage-status' },
  { id:'f-rcvddate',  label:'Received Date',  group:'Store Blanks',  elId:'rcvd-shortage-date'   },
  { id:'f-rcvdqty',  label:'Received Qty',  group:'Store Blanks',  elId:'rcvd-shortage-qty'  },
  /* ── Delivery Schedule ── */
  { id:'f-woissue',  label:'W/O Issue Date',  group:'Order Information',  elId:'del-start'  },
  { id:'f-weeks',  label:'No. of Weeks',  group:'Order Information',  elId:'del-weeks'  },
  { id:'f-delivery',  label:'Delivery Date (auto)',   group:'Order Information',  cardId:'del-result-wrap' },
  /* ── Core Team ── */
  { id:'f-rawmat',  label:'Raw Material',  group:'Core Team',  cardId:'pc-rawmat'   },
  { id:'f-bandsaw',  label:'Band Saw Cutting',  group:'Core Team',  cardId:'pc-bandsaw'  },
  { id:'f-convTurn',  label:'Conventional Turning',   group:'Core Team',  cardId:'pc-convTurn' },
  { id:'f-convMill',  label:'Conventional Milling',   group:'Core Team',  cardId:'pc-convMill' },
  { id:'f-cncTurn',  label:'CNC Turning',  group:'Core Team',  cardId:'pc-cncTurn'  },
  { id:'f-cncMillPre',  label:'CNC Milling Pre-Prod',   group:'Core Team',  cardId:'pc-cncMillPre'},
  { id:'f-bench',  label:'Bench (BTH)',  group:'Core Team',  cardId:'pc-bench'  },
  { id:'f-heatTreat',   label:'Heat Treatment',  group:'Core Team',  cardId:'pc-heatTreat'},
  { id:'f-sandBlast',   label:'Sand Blasting',  group:'Core Team',  cardId:'pc-sandBlast'},
  { id:'f-blacken',  label:'Blackening',  group:'Core Team',  cardId:'pc-blacken'  },
  /* ── Core Team Custom ── */
  { id:'f-cdRawmat',  label:'CD Raw Material',  group:'Core Team Custom',  cardId:'cd-pc-rawmat'   },
  { id:'f-cdBandsaw',   label:'CD Band Saw Cutting',  group:'Core Team Custom',  cardId:'cd-pc-bandsaw'  },
  { id:'f-cdConvTurn',  label:'CD Conv. Turning',  group:'Core Team Custom',  cardId:'cd-pc-convTurn' },
  { id:'f-cdConvMill',  label:'CD Conv. Milling',  group:'Core Team Custom',  cardId:'cd-pc-convMill' },
  { id:'f-cdCncTurn',   label:'CD CNC Turning',  group:'Core Team Custom',  cardId:'cd-pc-cncTurn'  },
  { id:'f-cdCncMill',   label:'CD CNC Milling Pre',  group:'Core Team Custom',  cardId:'cd-pc-cncMillPre'},
  { id:'f-cdBench',  label:'CD Bench (BTH)',  group:'Core Team Custom',  cardId:'cd-pc-bench'  },
  { id:'f-cdHeat',  label:'CD Heat Treatment',  group:'Core Team Custom',  cardId:'cd-pc-heatTreat'},
  { id:'f-cdSand',  label:'CD Sand Blasting',  group:'Core Team Custom',  cardId:'cd-pc-sandBlast'},
  { id:'f-cdBlacken',   label:'CD Blackening',  group:'Core Team Custom',  cardId:'cd-pc-blacken'  },
  /* ── Edge Team — Bin ── */
  { id:'f-sfBin',  label:'SF Bin Received',  group:'Edge Team — Bin',  cardId:'pc-sfBin'  },
  { id:'f-bsfItem',  label:'BSF Item',  group:'Edge Team — Bin',  cardId:'pc-bsfItem'  },
  /* ── Edge Team — Process ── */
  { id:'f-wedm',  label:'WEDM',  group:'Edge Team — Process',  cardId:'pc-wedm'  },
  { id:'f-elecEdge',  label:'Electrode',  group:'Edge Team — Process',  cardId:'pc-electrode'},
  { id:'f-cylGrnd',  label:'Cylindrical Grinding',   group:'Edge Team — Process',  cardId:'pc-cylGrndE' },
  { id:'f-surfGrnd',  label:'Surface Grinding',  group:'Edge Team — Process',  cardId:'pc-surfGrndE'},
  { id:'f-sparkEdm',  label:'Spark EDM',  group:'Edge Team — Process',  cardId:'pc-sparkEdm' },
  { id:'f-cncPost',  label:'CNC Milling Post-Prod',  group:'Edge Team — Process',  cardId:'pc-cncMillPost'},
  { id:'f-assembly',  label:'Assembly',  group:'Edge Team — Process',  cardId:'pc-assembly' },
  { id:'f-inspection',  label:'Inspection',  group:'Edge Team — Process',  cardId:'pc-inspection'},
  { id:'f-coatingEdge', label:'Coating',  group:'Edge Team — Process',  cardId:'pc-coating'  },
  { id:'f-trailDate',   label:'Trail Date',  group:'Edge Team — Process',  cardId:'pc-trailDate'},
  { id:'f-dispatch',  label:'Dispatch Date',  group:'Edge Team — Process',  cardId:'pc-dispatch' },
  /* ── Progress ── */
  { id:'f-progress',  label:'Progress Bar',  group:'Progress',  cardId:'progress-card'},
];

'use strict';

/* == Security helpers == */
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function sanitizeCSV(val) {
  const s = String(val || '');
  if (/^[=+\-@\t\r]/.test(s)) return "'" + s;
  return s;
}

/* =======================================
ENTRY SEARCH FUNCTIONS
======================================= */
let _searchTimer = null;
function entrySearchFilter() {
  clearTimeout(_searchTimer);
  _searchTimer = setTimeout(_doEntrySearch, 200);
}
function _doEntrySearch() {
  const inp  = document.getElementById('entry-search-inp');
  const box  = document.getElementById('entry-search-results');
  const clr  = document.getElementById('entry-search-clear');
  const divF = document.getElementById('entry-div-filter')?.value || '';
  const q  = inp.value.trim().toLowerCase();
  clr.style.display = q ? 'inline' : 'none';
  if (!q && !divF) { box.style.display = 'none'; return; }
  const matches = allOrders.filter(r => {
  const woMatch  = !q  || (r.id||'').toLowerCase().includes(q);
  const divMatch = !divF || (r.division||'') === divF;
  return woMatch && divMatch;
  }).slice(0, 10);
  if (!matches.length) {
  box.innerHTML = '<div style="padding:12px 16px;color:var(--muted);font-family:var(--font-mn);font-size:12px;">No matching work orders</div>';
  box.style.display = 'block'; return;
  }
  box.innerHTML = matches.map(r => `
  <div onmousedown="loadWOIntoForm('${escapeHtml(r.id)}')"
  style="padding:9px 14px;cursor:pointer;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px;transition:background .1s;"
  onmouseover="this.style.background='#eef3ff'" onmouseout="this.style.background='transparent'">
  <span style="font-family:var(--font-mn);font-size:12px;font-weight:700;color:var(--accent);min-width:100px;">${escapeHtml(r.id)}</span>
  <span style="font-size:12px;color:var(--text-2);flex:1;">${escapeHtml(r.customer)||'&mdash;'}</span>
  <span style="font-family:var(--font-mn);font-size:10px;color:var(--muted);">${escapeHtml(r.division)||''}</span>
  <span style="font-family:var(--font-mn);font-size:10px;color:var(--success);">${escapeHtml(r.progress)||'0%'}</span>
  </div>`).join('');
  box.style.display = 'block';
}

function clearEntrySearch() {
  document.getElementById('entry-search-inp').value = '';
  document.getElementById('entry-search-results').style.display = 'none';
  document.getElementById('entry-search-clear').style.display = 'none';
}

let allOrders = [];
let customerRecords = [];
let customerNames = [];
let customerSuggestionItems = [];
let customerSuggestionIndex = -1;

function renderCustomerDatalist() {
  renderCustomerSuggestions(false);
}

function _getCustomerInput() {
  return document.getElementById('customer');
}

function _getCustomerList() {
  return document.getElementById('customer-list');
}

function _findCustomerRecordByName(name) {
  const normalized = String(name || '').trim().toLowerCase();
  if (!normalized) return null;
  return customerRecords.find(customer => customer.name.toLowerCase() === normalized) || null;
}

function hideCustomerSuggestions() {
  const list = _getCustomerList();
  customerSuggestionItems = [];
  customerSuggestionIndex = -1;
  if (!list) return;
  list.style.display = 'none';
  list.innerHTML = '';
}

function _setCustomerInputState(valid) {
  const input = _getCustomerInput();
  if (!input) return;
  input.style.borderColor = valid ? '' : '#ef4444';
  input.style.boxShadow = valid ? '' : '0 0 0 3px rgba(239,68,68,.12)';
}

function renderCustomerSuggestions(show = true) {
  const input = _getCustomerInput();
  const list = _getCustomerList();
  if (!input || !list) return;

  const query = input.value.trim().toLowerCase();
  const exactMatch = _findCustomerRecordByName(input.value);
  _setCustomerInputState(!input.value.trim() || !!exactMatch);

  if (!show || !customerRecords.length) {
    hideCustomerSuggestions();
    return;
  }

  const filtered = customerRecords
    .map((customer, index) => ({ ...customer, _index: index }))
    .filter(customer => !query || customer.name.toLowerCase().includes(query) || (customer.code || '').toLowerCase().includes(query))
    .slice(0, 12);

  customerSuggestionItems = filtered;
  customerSuggestionIndex = filtered.length ? 0 : -1;

  if (!filtered.length) {
    list.innerHTML = '<div style="padding:10px 12px;font-family:var(--font-mn);font-size:11px;color:var(--muted);">No matching customers</div>';
    list.style.display = 'block';
    return;
  }

  list.innerHTML = filtered.map((customer, idx) => {
    const active = idx === customerSuggestionIndex;
    const code = escapeHtml(customer.code || '');
    const name = escapeHtml(customer.name || '');
    const border = idx === filtered.length - 1 ? 'none' : '1px solid var(--border)';
    return `<button type="button" onmousedown="selectCustomerSuggestion(${customer._index}); return false;" style="display:flex;width:100%;align-items:flex-start;justify-content:space-between;gap:10px;padding:10px 12px;border:none;border-bottom:${border};background:${active ? '#eef3ff' : 'transparent'};cursor:pointer;text-align:left;">
      <span style="display:flex;flex-direction:column;gap:2px;">
        <span style="font-size:12px;font-weight:600;color:var(--text);">${name}</span>
        <span style="font-family:var(--font-mn);font-size:10px;color:var(--muted);">Select from customer master</span>
      </span>
      <span style="font-family:var(--font-mn);font-size:10px;color:var(--accent);white-space:nowrap;">${code || 'NO CODE'}</span>
    </button>`;
  }).join('');
  list.style.display = 'block';
}

function updateCustomerSuggestionHighlight() {
  const list = _getCustomerList();
  if (!list || list.style.display === 'none') return;
  Array.from(list.querySelectorAll('button')).forEach((button, index) => {
    button.style.background = index === customerSuggestionIndex ? '#eef3ff' : 'transparent';
  });
}

function selectCustomerSuggestion(index) {
  const input = _getCustomerInput();
  const customer = customerRecords[index];
  if (!input || !customer) return;
  input.value = customer.name;
  _setCustomerInputState(true);
  hideCustomerSuggestions();
}

function handleCustomerInput() {
  renderCustomerSuggestions(true);
}

function handleCustomerFocus() {
  renderCustomerSuggestions(true);
}

function handleCustomerBlur() {
  setTimeout(() => {
    const input = _getCustomerInput();
    if (!input) return;
    _setCustomerInputState(!input.value.trim() || !!_findCustomerRecordByName(input.value));
    hideCustomerSuggestions();
  }, 150);
}

function handleCustomerKeydown(event) {
  const list = _getCustomerList();
  if (!list || list.style.display === 'none') {
    if (event.key === 'ArrowDown') renderCustomerSuggestions(true);
    return;
  }
  if (!customerSuggestionItems.length) return;

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    customerSuggestionIndex = Math.min(customerSuggestionIndex + 1, customerSuggestionItems.length - 1);
    updateCustomerSuggestionHighlight();
    return;
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    customerSuggestionIndex = Math.max(customerSuggestionIndex - 1, 0);
    updateCustomerSuggestionHighlight();
    return;
  }
  if (event.key === 'Enter') {
    const selected = customerSuggestionItems[customerSuggestionIndex];
    if (selected) {
      event.preventDefault();
      selectCustomerSuggestion(selected._index);
    }
    return;
  }
  if (event.key === 'Escape') {
    hideCustomerSuggestions();
  }
}

function validateCustomerSelection(showMessage = false) {
  const input = _getCustomerInput();
  const value = input?.value?.trim() || '';
  if (!value) {
    _setCustomerInputState(true);
    return false;
  }
  const match = _findCustomerRecordByName(value);
  const isValid = !customerRecords.length || !!match;
  _setCustomerInputState(isValid);
  if (!isValid && showMessage) {
    showToast('⚠', 'Select customer name from the list', true);
    input?.focus();
    renderCustomerSuggestions(true);
  }
  return isValid;
}

function loadCustomerNames() {
  return fetch('/api/customers')
    .then(r => r.ok ? r.json() : [])
    .then(customers => {
      customerRecords = Array.isArray(customers)
        ? customers.map(customer => ({
            id: customer.id,
            code: String(customer.code || '').trim(),
            name: String(customer.name || '').trim(),
            updatedAt: customer.updatedAt || ''
          })).filter(customer => customer.name)
        : [];
      customerNames = customerRecords.map(customer => customer.name);
      renderCustomerDatalist();
      renderCustomerAdminTable();
      validateCustomerSelection(false);
      return customerRecords;
    })
    .catch(() => {
      customerRecords = [];
      customerNames = [];
      renderCustomerDatalist();
      renderCustomerAdminTable();
      _setCustomerInputState(true);
      return [];
    });
}

function triggerCustomerImport() {
  if (!currentUser?.isAdmin) return;
  document.getElementById('customer-import-input')?.click();
}

function importCustomerNames() {
  const input = document.getElementById('customer-import-input');
  const file = input?.files?.[0];
  if (!file) return;
  if (!currentUser?.isAdmin) {
    showToast('⚠', 'Only administrators can import customers', true);
    input.value = '';
    return;
  }

  const formData = new FormData();
  formData.append('file', file);
  fetch('/api/customers/import', {
    method: 'POST',
    body: formData
  })
    .then(async r => {
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || 'Customer import failed');
      return data;
    })
    .then(data => {
      loadCustomerNames();
      showToast('✓', `Imported ${data.imported} customers (${data.inserted || 0} new, ${data.updated || 0} updated)`);
    })
    .catch(err => showToast('⚠', err.message || 'Customer import failed', true))
    .finally(() => {
      if (input) input.value = '';
    });
}

function loadOrders() {
  return fetch('/api/orders')
    .then(r => r.json())
    .then(data => { allOrders = data; })
    .catch(() => { allOrders = []; });
}

function _setAttachmentUI(filename) {
  const nameEl = document.getElementById('attach-name');
  const inputEl = document.getElementById('attach-input');
  const viewBtn = document.getElementById('btn-view-pdf');
  const deleteBtn = document.getElementById('btn-delete-pdf');
  const cleanName = filename || '';
  if (nameEl) {
    nameEl.textContent = cleanName || 'None';
    nameEl.title = cleanName || 'No PDF attached';
    nameEl.dataset.filename = cleanName;
  }
  if (inputEl) inputEl.value = '';
  [viewBtn, deleteBtn].forEach(btn => {
    if (!btn) return;
    btn.disabled = !cleanName;
    btn.style.opacity = cleanName ? '1' : '.5';
    btn.style.cursor = cleanName ? 'pointer' : 'not-allowed';
  });
}

function openAttachmentPicker() {
  const wo = fv('wo').trim();
  if (!wo) {
    showToast('⚠', 'Enter and save the work order before attaching a PDF', true);
    return;
  }
  document.getElementById('attach-input')?.click();
}

function uploadAttachment() {
  const wo = fv('wo').trim();
  const input = document.getElementById('attach-input');
  const file = input?.files?.[0];
  if (!file) return;
  if (!wo) {
    showToast('⚠', 'Save the work order before attaching a PDF', true);
    input.value = '';
    return;
  }
  if (!file.name.toLowerCase().endsWith('.pdf')) {
    showToast('⚠', 'Only PDF files are allowed', true);
    input.value = '';
    return;
  }

  const formData = new FormData();
  formData.append('file', file);
  fetch(`/api/orders/${encodeURIComponent(wo)}/attachment`, {
    method: 'POST',
    body: formData
  })
    .then(async r => {
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || ('Server error ' + r.status));
      return data;
    })
    .then(data => {
      const filename = data.filename || file.name;
      _setAttachmentUI(filename);
      showToast('📎', `PDF attached: ${filename}`);
      return loadOrders().then(() => renderDB());
    })
    .catch(err => showToast('⚠', err.message || 'PDF upload failed', true))
    .finally(() => {
      if (input) input.value = '';
    });
}

let _pdfViewerObjectUrl = null;

function closePdfViewer() {
  const overlay = document.getElementById('pdf-viewer-overlay');
  const frame = document.getElementById('pdf-viewer-frame');
  const title = document.getElementById('pdf-viewer-title');
  if (frame) frame.src = 'about:blank';
  if (title) title.textContent = '—';
  if (_pdfViewerObjectUrl) {
    URL.revokeObjectURL(_pdfViewerObjectUrl);
    _pdfViewerObjectUrl = null;
  }
  if (overlay) overlay.style.display = 'none';
}

function viewAttachment() {
  const wo = fv('wo').trim();
  const filename = document.getElementById('attach-name')?.dataset.filename || '';
  if (!wo || !filename) {
    showToast('⚠', 'No PDF is attached', true);
    return;
  }
  const url = `/api/orders/${encodeURIComponent(wo)}/attachment`;
  fetch(url, { credentials: 'include' })
    .then(async r => {
      if (!r.ok) {
        const data = await r.json().catch(() => ({}));
        throw new Error(data.error || 'Could not open PDF');
      }
      return r.blob();
    })
    .then(blob => {
      closePdfViewer();
      _pdfViewerObjectUrl = URL.createObjectURL(blob);
      const overlay = document.getElementById('pdf-viewer-overlay');
      const frame = document.getElementById('pdf-viewer-frame');
      const title = document.getElementById('pdf-viewer-title');
      if (title) title.textContent = filename || `${wo}.pdf`;
      if (frame) frame.src = _pdfViewerObjectUrl;
      if (overlay) overlay.style.display = 'block';
    })
    .catch(err => showToast('⚠', err.message || 'Could not open PDF', true));
}

function deleteAttachment() {
  const wo = fv('wo').trim();
  const filename = document.getElementById('attach-name')?.dataset.filename || '';
  if (!wo || !filename) {
    showToast('⚠', 'No PDF is attached', true);
    return;
  }
  if (!confirm(`Remove PDF from work order "${wo}"?`)) return;
  fetch(`/api/orders/${encodeURIComponent(wo)}/attachment`, { method: 'DELETE' })
    .then(async r => {
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || ('Server error ' + r.status));
      return data;
    })
    .then(() => {
      _setAttachmentUI(null);
      showToast('✕', 'PDF removed');
      return loadOrders().then(() => renderDB());
    })
    .catch(err => showToast('⚠', err.message || 'Failed to remove PDF', true));
}

function loadWOIntoForm(id) {
  const r = allOrders.find(o => o.id === id);
  if (!r) return;
  const _orig = window.confirm; window.confirm = () => true;
  resetForm(); window.confirm = _orig;
  const set = (elId, val) => { const el = document.getElementById(elId); if (el) el.value = val || ''; };
  set('wo', r.id); set('customer', r.customer); set('division', r.division);
  set('coating', r.coating); set('electrode', r.electrode);
  onCoatingChange(document.getElementById('coating'));
  onElectrodeChange(document.getElementById('electrode'));
  set('orderqty', r.orderQty); set('ordervalue', r.orderValue);
  set('storeblanks', r.storeAQTY); set('trail', r.trail); set('binNumber', r.binNumber);
  onTrailChange(document.getElementById('trail'));
  // Load received shortage
  const rss = document.getElementById('rcvd-shortage-status');
  if (rss && r.rcvdShortageStatus) {
  rss.value = r.rcvdShortageStatus;
  onRcvdShortageChange(rss);
  setTimeout(() => {
  const d = document.getElementById('rcvd-shortage-date');
  if (d && r.rcvdShortageDate) { d.value=r.rcvdShortageDate; d._display=r.rcvdShortageDate; d._iso=''; d.classList.add('edge-done'); }
  const q = document.getElementById('rcvd-shortage-qty');
  if (q && r.rcvdShortageQty) q.value = r.rcvdShortageQty;
  }, 50);
  }
  set('po-advance', r.poAdvance); set('design', r.design); set('del-weeks', r.weeks);
  const priEl = document.getElementById('priority');
  if (priEl) { priEl.value = r.priority || ''; colorPriority(priEl); }
  const fillDate = (elId, display) => {
  const el = document.getElementById(elId);
  if (el && display) { el.value = display; el._display = display; el._iso = ''; el.classList.add('core-done'); }
  };
  fillDate('po-entry-date', r.poEntryDate);
  fillDate('del-start', r.woIssueDate);
  if (r.poAdvance === 'Yes' && r.poDateTime) {
  document.getElementById('po-datetime-field').style.display = 'flex';
  document.getElementById('po-datetime').value = r.poDateTime;
  }
  if (r.deliveryDate) {
  const dr = document.getElementById('del-result');
  if (dr) { dr.textContent = r.deliveryDate; dr.className = 'delivery-date-result has-date'; }
  }
  const shEl = document.getElementById('shortage');
  if (shEl && r.shortage) { shEl.value = r.shortage; onShortageChange(shEl); }
  setTimeout(() => {
  (r.coreProcesses||[]).forEach(p => {
  const reqEl = document.getElementById(`req-${p.id}`);
  if (reqEl && p.req) { reqEl.value = p.req; onReqChange(p.id, 'core-done', reqEl); if (p.req==='Required') { fillDate(`${p.id}P`, p.planned); fillDate(`${p.id}S`, p.start); fillDate(`${p.id}E`, p.end); } }
  });
  (r.edgeProcesses||[]).forEach(p => {
  const reqEl = document.getElementById(`req-${p.id}`);
  if (reqEl && p.req) { reqEl.value = p.req; onReqChange(p.id, 'edge-done', reqEl); if (p.req==='Required') { fillDate(`${p.id}P`, p.planned); fillDate(`${p.id}S`, p.start); fillDate(`${p.id}E`, p.end); } }
  });
  if (r.sfBinStatus) {
  const sfSel = document.getElementById('sfbBin');
  if (sfSel) { sfSel.value = r.sfBinStatus; onSFBinChange(sfSel); }
  fillDate('sfbPlanDate', r.sfPlanDate);
  fillDate('sfbRecDate', r.sfRecDate);
  set('sfbRecQty', r.sfRecQty);
  }
  if (r.bsfStatus || r.bsfQty) {
  const bsfSel = document.getElementById('bsfStatus');
  if (bsfSel && r.bsfStatus) { bsfSel.value = r.bsfStatus; onBSFStatusChange(bsfSel); }
  set('bsfItem', r.bsfQty);
  fillDate('bsfPlanDate', r.bsfPlanDate);
  fillDate('bsfRecDate', r.bsfRecDate);
  }
  // Load custom design dates if Custom Drawing was selected
  if (r.design === 'Custom Drawing' && r.customDesignDates?.length) {
  const designSel = document.getElementById('design');
  if (designSel) { designSel.value = 'Custom Drawing'; onDesignChange(designSel); }
  setTimeout(() => {
  (r.customDesignDates||[]).forEach(p => {
  const reqEl = document.getElementById(`cd-req-${p.id}`);
  if (reqEl && p.req) { reqEl.value = p.req; onCDReqChange(p.id, reqEl); }
  if (p.req === 'Required') {
  fillDate(`cd-${p.id}P`, p.planned);
  fillDate(`cd-${p.id}S`, p.start);
  fillDate(`cd-${p.id}E`, p.end);
  }
  });
  }, 50);
  }
  recalcProgress();
  }, 100);
  _setAttachmentUI(r.attachmentName || r.attachmentPath || r.attachment_path || null);
  clearEntrySearch();
  showToast('📂', `Loaded W/O "${id}"`);
}

/* =======================================
NEW ENTRY
======================================= */
function newEntry() {
  const wo = document.getElementById('wo')?.value?.trim();
  if (wo) {
  if (!confirm('Save current entry and start a new one?')) return;
  saveForm();
  }
  const _orig = window.confirm;
  window.confirm = () => true;
  resetForm();
  window.confirm = _orig;
  document.getElementById('wo')?.focus();
  showToast('＋', 'Ready for new entry');
}

/* =======================================
ENTRY FORM JS
======================================= */
const CY = new Date().getFullYear();

const CORE_PROCESSES = [
  { id:'rawMat',  label:'Raw Material'  },
  { id:'bandSaw',   label:'Band Saw Cutting'  },
  { id:'convTrn',   label:'Conventional Turning'  },
  { id:'convMil',   label:'Conventional Milling'  },
  { id:'cncTrn',  label:'CNC Turning'  },
  { id:'cncMilPre', label:'CNC Milling Pre-Production'},
  { id:'bench',  label:'Bench (BTH)'  },
  { id:'heat',  label:'Heat Treatment'  },
  { id:'sandBlast', label:'Sand Blasting',  datesOnly:true },
  { id:'blacken',   label:'Blackening',  datesOnly:true },
];

const EDGE_PROCESSES = [
  { id:'wedm',  label:'WEDM'  },
  { id:'electrode',  label:'Electrode',  datesOnly:true },
  { id:'cylGrndE',   label:'Cylindrical Grinding'  },
  { id:'surfGrndE',  label:'Surface Grinding'  },
  { id:'sparkEdm',   label:'Spark EDM'  },
  { id:'cncMillPost',label:'CNC Milling Post Production'   },
  { id:'assembly',   label:'Assembly'  },
  { id:'inspection', label:'Inspection'  },
  { id:'coating',  label:'Coating',  datesOnly:true },
  { id:'trailDate',  label:'Trail',  endOnly:true  },
  { id:'dispatch',   label:'Dispatch Date', singleDate:true },
];

/* == Received Shortage Blank from Core Team == */
function onRcvdShortageChange(sel) {
  const dateWrap = document.getElementById('rcvd-shortage-date-wrap');
  const qtyWrap  = document.getElementById('rcvd-shortage-qty-wrap');
  if (sel.value === 'Inspected and Received') {
  dateWrap.style.display = '';
  qtyWrap.style.display  = '';
  } else {
  dateWrap.style.display = 'none';
  qtyWrap.style.display  = 'none';
  const d = document.getElementById('rcvd-shortage-date');
  const q = document.getElementById('rcvd-shortage-qty');
  if (d) { d.value=''; d._iso=''; d._display=''; d.className='date-txt'; }
  if (q) q.value = '';
  }
}

/* == Trail Required → show/hide Trail date card == */
function onTrailChange(sel) {
  const card = document.getElementById('pc-trailDate');
  if (!card) return;
  if (sel.value === 'Required') {
  card.style.display = '';
  } else {
  card.style.display = 'none';
  const pInp = document.getElementById('trailDateP');
  const eInp = document.getElementById('trailDateE');
  if (pInp) { pInp.value=''; pInp._iso=''; pInp._display=''; pInp.className='date-txt'; }
  if (eInp) { eInp.value=''; eInp._iso=''; eInp._display=''; eInp.className='date-txt'; }
  const badge = document.getElementById('st-trailDate');
  if (badge) { badge.className='proc-status s-pend'; badge.textContent='Pending'; }
  }
}

/* == Core Team Custom — Required/Not Required handler == */
function onCDReqChange(procId, sel) {
  const wrap  = document.getElementById(`cd-dates-${procId}`);
  const badge = document.getElementById(`cd-st-${procId}`);
  if (sel.value === 'Required') {
  if (wrap) wrap.style.display = 'flex';
  if (badge) { badge.className = 'proc-status s-prog'; badge.textContent = 'Active'; }
  document.getElementById(`cd-${procId}P`)?.focus();
  } else if (sel.value === 'Not Required') {
  if (wrap) wrap.style.display = 'none';
  if (badge) { badge.className = 'proc-status s-done'; badge.textContent = 'Not Required'; }
  const pInp = document.getElementById(`cd-${procId}P`);
  const sInp = document.getElementById(`cd-${procId}S`);
  const eInp = document.getElementById(`cd-${procId}E`);
  if (pInp) { pInp.value=''; pInp._iso=''; pInp._display=''; pInp.className='date-txt'; }
  if (sInp) { sInp.value=''; sInp._iso=''; sInp._display=''; sInp.className='date-txt'; }
  if (eInp) { eInp.value=''; eInp._iso=''; eInp._display=''; eInp.className='date-txt'; }
  } else {
  if (wrap) wrap.style.display = 'none';
  if (badge) { badge.className = 'proc-status s-pend'; badge.textContent = 'Pending'; }
  }
}

/* == Coating Required → show/hide coating process card == */
function onCoatingChange(sel) {
  const card = document.getElementById('pc-coating');
  if (!card) return;
  if (sel.value === 'Yes') {
  card.style.display = '';
  } else {
  card.style.display = 'none';
  // clear dates when hidden
  const pInp = document.getElementById('coatingP');
  const sInp = document.getElementById('coatingS');
  const eInp = document.getElementById('coatingE');
  if (pInp) { pInp.value=''; pInp._display=''; pInp._iso=''; pInp.className='date-txt'; }
  if (sInp) { sInp.value=''; sInp._display=''; sInp._iso=''; sInp.className='date-txt'; }
  if (eInp) { eInp.value=''; eInp._display=''; eInp._iso=''; eInp.className='date-txt'; }
  const badge = document.getElementById('st-coating');
  if (badge) { badge.className='proc-status s-pend'; badge.textContent='Pending'; }
  recalcProgress();
  }
}

/* == Electrode Required → show/hide Electrode edge card == */
function onElectrodeChange(sel) {
  const card = document.getElementById('pc-electrode');
  if (!card) return;
  if (sel.value === 'Yes') {
  card.style.display = '';
  } else {
  card.style.display = 'none';
  const pInp = document.getElementById('electrodeP');
  const sInp = document.getElementById('electrodeS');
  const eInp = document.getElementById('electrodeE');
  if (pInp) { pInp.value=''; pInp._iso=''; pInp._display=''; pInp.className='date-txt'; }
  if (sInp) { sInp.value=''; sInp._iso=''; sInp._display=''; sInp.className='date-txt'; }
  if (eInp) { eInp.value=''; eInp._iso=''; eInp._display=''; eInp.className='date-txt'; }
  const badge = document.getElementById('st-electrode');
  if (badge) { badge.className='proc-status s-pend'; badge.textContent='Pending'; }
  }
}

/* == P.O Advance == */
function onPOAdvanceChange(sel) {
  const field = document.getElementById('po-datetime-field');
  const dtInp = document.getElementById('po-datetime');
  if (sel.value === 'Yes') {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2,'0');
  const mm = String(now.getMonth()+1).padStart(2,'0');
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2,'0');
  const min = String(now.getMinutes()).padStart(2,'0');
  const ss = String(now.getSeconds()).padStart(2,'0');
  dtInp.value = `${dd}/${mm}/${yyyy}  ${hh}:${min}:${ss}`;
  field.style.display = 'flex';
  dtInp.style.transition = 'box-shadow .3s';
  dtInp.style.boxShadow = '0 0 0 3px rgba(16,185,129,.25)';
  setTimeout(() => dtInp.style.boxShadow = 'none', 1200);
  showToast('✦', 'P.O Advance timestamp captured');
  } else {
  dtInp.value = '';
  field.style.display = 'none';
  }
}

/* == Auto-calculate shortage == */
function calcShortage() {
  const storeBlanksEl = document.getElementById('storeblanks');
  const el = document.getElementById('shortage');
  if (!storeBlanksEl.value.trim()) {
  el.value = ''; el.style.background = ''; el.style.color = ''; el.style.borderColor = ''; el.style.fontWeight = ''; el.style.boxShadow = '';
  onShortageChange(el); return;
  }
  const qty = parseFloat(document.getElementById('orderqty').value) || 0;
  const aqty = parseFloat(storeBlanksEl.value) || 0;
  const shortage = Math.max(0, qty - aqty);
  el.value = shortage;
  if (shortage > 0) {
  el.style.background = '#fff7ed'; el.style.color = '#c2410c'; el.style.borderColor = '#fb923c'; el.style.fontWeight = '700'; el.style.boxShadow = '0 0 0 3px rgba(251,146,60,.15)';
  } else {
  el.style.background = '#f0f9ff'; el.style.color = 'var(--accent)'; el.style.borderColor = 'rgba(37,99,235,.25)'; el.style.fontWeight = '700'; el.style.boxShadow = 'none';
  }
  onShortageChange(el);
}

/* == Design dropdown == */
function onDesignChange(sel) {
  const wrap  = document.getElementById('custom-wrap');
  const input = document.getElementById('custom-note');
  const cdCard = document.getElementById('custom-design-card');
  const cdGrid = document.getElementById('custom-design-grid');

  if (sel.value === 'Custom Drawing') {
  wrap.classList.add('visible');
  input.disabled = false;
  if (!input._dateSetup) { setupDateInput(input, 'core-done'); input._dateSetup = true; }
  input.focus();
  // Build custom design department date cards if not already built
  if (cdGrid && !cdGrid._built) {
  cdGrid.innerHTML = '';
  CORE_PROCESSES.forEach(p => {
  const div = document.createElement('div');
  div.className = 'process-card core';
  div.id = `cd-pc-${p.id}`;
  div.innerHTML = `
  <div class="process-card-hd">
  <span class="dot"></span>
  <span>${p.label}</span>
  <span class="proc-status s-pend" id="cd-st-${p.id}">Pending</span>
  </div>
  <div class="process-card-body">
  <div class="date-row">
  <label>Status</label>
  <select id="cd-req-${p.id}" class="req-select" onchange="onCDReqChange('${p.id}', this)">
  <option value="">&#8212; Select &#8212;</option>
  <option value="Required">Required</option>
  <option value="Not Required">Not Required</option>
  </select>
  </div>
  <div id="cd-dates-${p.id}" style="display:none;flex-direction:column;gap:8px;margin-top:6px;">
  <div class="date-row">
  <label>Planned Date</label>
  <input type="text" class="date-txt" id="cd-${p.id}P" placeholder="DDMM &rarr; DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  <div class="date-row">
  <label>Start Date</label>
  <input type="text" class="date-txt" id="cd-${p.id}S" placeholder="DDMM &rarr; DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  <div class="date-row">
  <label>End Date</label>
  <input type="text" class="date-txt" id="cd-${p.id}E" placeholder="DDMM &rarr; DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  </div>
  </div>`;
  cdGrid.appendChild(div);
  setupDateInput(div.querySelector(`#cd-${p.id}P`), 'core-done');
  setupDateInput(div.querySelector(`#cd-${p.id}S`), 'core-done');
  setupDateInput(div.querySelector(`#cd-${p.id}E`), 'core-done');
  });
  cdGrid._built = true;
  }
  if (cdCard) cdCard.style.display = '';
  } else {
  wrap.classList.remove('visible');
  input.disabled = true;
  input.value = ''; input._iso = ''; input._display = ''; input.className = 'date-txt';
  if (cdCard) cdCard.style.display = 'none';
  }
}

/* == Shortage → SF Bin + Core lock/unlock == */
function onShortageChange(inp) {
  const val = parseInt(inp.value) || 0;
  const afNote = document.getElementById('af-note');
  const coreCard = document.getElementById('core-card');
  const coreBadge = document.getElementById('core-badge');
  const bsfItem = document.getElementById('bsfItem');
  if (bsfItem) { bsfItem.value = val > 0 ? val : ''; bsfItem.classList.toggle('auto-filled', val > 0); }
  const bsfStatusSel = document.getElementById('bsfStatus');
  if (bsfStatusSel) {
  if (val > 0) { bsfStatusSel.disabled = false; bsfStatusSel.style.opacity = '1'; bsfStatusSel.style.cursor = 'pointer'; if (bsfStatusSel.options[0]) bsfStatusSel.options[0].text = '— Select —'; }
  else { bsfStatusSel.disabled = true; bsfStatusSel.style.opacity = '.4'; bsfStatusSel.style.cursor = 'not-allowed'; if (bsfStatusSel.options[0]) bsfStatusSel.options[0].text = '— Enter shortage to unlock —'; }
  }
  afNote.classList.toggle('show', val > 0);
  if (val > 0) {
  coreCard.classList.remove('locked');
  coreBadge.textContent = '9 PROCESSES';
  coreBadge.style.background = 'rgba(255,255,255,.15)';
  coreBadge.style.color = 'rgba(255,255,255,.9)';
  } else {
  coreCard.classList.add('locked');
  coreBadge.textContent = '🔒 LOCKED';
  coreBadge.style.background = 'rgba(239,68,68,.2)';
  coreBadge.style.color = '#fca5a5';
  CORE_PROCESSES.forEach(p => {
  ['S','E'].forEach(sfx => { const el = document.getElementById(`${p.id}${sfx}`); if (el) { el.value=''; el._iso=''; el._display=''; el.className='date-txt'; } });
  const badge = document.getElementById(`st-${p.id}`); if (badge) { badge.className='proc-status s-pend'; badge.textContent='Pending'; }
  });
  }
  recalcProgress();
}

/* == Smart date input == */
function parseSmartDate(raw) {
  const s = raw.trim().replace(/[\/-]/g,'');
  if (!s) return { ok:true, display:'', iso:'' };
  if (/^\d{4}$/.test(s)) {
  const dd=s.slice(0,2),mm=s.slice(2,4),d=+dd,m=+mm;
  if(m<1||m>12||d<1||d>31) return{ok:false};
  return{ok:true,display:`${dd}/${mm}/${CY}`,iso:`${CY}-${mm}-${dd}`};
  }
  if (/^\d{6}$/.test(s)) {
  const dd=s.slice(0,2),mm=s.slice(2,4),yy=2000+(+s.slice(4,6)),d=+dd,m=+mm;
  if(m<1||m>12||d<1||d>31) return{ok:false};
  return{ok:true,display:`${dd}/${mm}/${yy}`,iso:`${yy}-${mm}-${dd}`};
  }
  if (/^\d{8}$/.test(s)) {
  const dd=s.slice(0,2),mm=s.slice(2,4),yyyy=s.slice(4,8),d=+dd,m=+mm;
  if(m<1||m>12||d<1||d>31) return{ok:false};
  return{ok:true,display:`${dd}/${mm}/${yyyy}`,iso:`${yyyy}-${mm}-${dd}`};
  }
  const mx=raw.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if(mx){const dd=mx[1].padStart(2,'0'),mm=mx[2].padStart(2,'0'),yyyy=mx[3];return{ok:true,display:`${dd}/${mm}/${yyyy}`,iso:`${yyyy}-${mm}-${dd}`};}
  return{ok:false};
}

function setupDateInput(inp, doneClass) {
  if (!inp || inp._dateSetupDone) return;
  inp._dateSetupDone = true;
  inp._iso=''; inp._display='';
  inp.addEventListener('focus',()=>{ if(inp._display) inp.value=inp._display.replace(/\//g,'').slice(0,4); });
  const commit=()=>{
  const raw=inp.value.trim();
  if(!raw){inp.value='';inp._iso='';inp._display='';inp.className='date-txt';recalcProgress();return;}
  const res=parseSmartDate(raw);
  if(res.ok){inp.value=res.display;inp._display=res.display;inp._iso=res.iso;inp.className=`date-txt ${doneClass}`;}
  else{inp.classList.add('err');setTimeout(()=>inp.classList.remove('err'),500);}
  recalcProgress();
  };
  inp.addEventListener('blur',commit);
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key==='Tab'){e.preventDefault();commit();inp.blur();}});
  inp.addEventListener('input',()=>{const raw=inp.value.replace(/\D/g,'');if(raw.length===4){inp.value=raw;setTimeout(commit,0);}});
}

/* == Build process cards == */
function buildProcessCard(proc, teamClass, container) {
  const card = document.createElement('div');
  card.className = `process-card ${teamClass}`;
  card.id = `pc-${proc.id}`;
  const doneClass = teamClass === 'core' ? 'core-done' : 'edge-done';

  if (proc.singleDate) {
  // Single date only (e.g. Dispatch Date)
  card.innerHTML = `
  <div class="process-card-hd">
  <span class="dot"></span>
  <span>${proc.label}</span>
  <span class="proc-status s-pend" id="st-${proc.id}">Pending</span>
  </div>
  <div class="process-card-body">
  <div class="date-row">
  <label>Planned Date</label>
  <input type="text" class="date-txt" id="${proc.id}P" placeholder="DDMM &#8594; DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  <div class="date-row">
  <label>Date</label>
  <input type="text" class="date-txt" id="${proc.id}S" placeholder="DDMM &#8594; DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  </div>`;
  container.appendChild(card);
  const pInp = card.querySelector(`#${proc.id}P`);
  const inp = card.querySelector(`#${proc.id}S`);
  setupDateInput(pInp, doneClass);
  setupDateInput(inp, doneClass);
  inp.addEventListener('blur', () => {
  const badge = document.getElementById(`st-${proc.id}`);
  if (!badge) return;
  if (inp._display) { badge.className='proc-status s-done'; badge.textContent='Done'; }
  else  { badge.className='proc-status s-pend'; badge.textContent='Pending'; }
  recalcProgress();
  });
  return;
  }

  if (proc.endOnly) {
  // End date only — no start date, no status dropdown
  card.innerHTML = `
  <div class="process-card-hd">
  <span class="dot"></span>
  <span>${proc.label}</span>
  <span class="proc-status s-pend" id="st-${proc.id}">Pending</span>
  </div>
  <div class="process-card-body">
  <div class="date-row">
  <label>Planned Date</label>
  <input type="text" class="date-txt" id="${proc.id}P" placeholder="DDMM &#8594; DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  <div class="date-row">
  <label>End Date</label>
  <input type="text" class="date-txt" id="${proc.id}E" placeholder="DDMM &#8594; DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  </div>`;
  container.appendChild(card);
  const pInp = card.querySelector(`#${proc.id}P`);
  const eInp = card.querySelector(`#${proc.id}E`);
  setupDateInput(pInp, doneClass);
  setupDateInput(eInp, doneClass);
  eInp.addEventListener('blur', () => {
  const badge = document.getElementById(`st-${proc.id}`);
  if (!badge) return;
  const e = eInp._display;
  if (e) { badge.className='proc-status s-done'; badge.textContent='Done'; }
  else   { badge.className='proc-status s-pend'; badge.textContent='Pending'; }
  recalcProgress();
  });
  return;
  }

  if (proc.datesOnly) {
  // No status dropdown — show start/end dates directly
  card.innerHTML = `
  <div class="process-card-hd">
  <span class="dot"></span>
  <span>${proc.label}</span>
  <span class="proc-status s-pend" id="st-${proc.id}">Pending</span>
  </div>
  <div class="process-card-body">
  <div class="date-row">
  <label>Planned Date</label>
  <input type="text" class="date-txt" id="${proc.id}P" placeholder="DDMM &#8594; DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  <div class="date-row">
  <label>Start Date</label>
  <input type="text" class="date-txt" id="${proc.id}S" placeholder="DDMM &#8594; DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  <div class="date-row">
  <label>End Date</label>
  <input type="text" class="date-txt" id="${proc.id}E" placeholder="DDMM &#8594; DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  </div>`;
  container.appendChild(card);
  const pInp = card.querySelector(`#${proc.id}P`);
  const sInp = card.querySelector(`#${proc.id}S`);
  const eInp = card.querySelector(`#${proc.id}E`);
  setupDateInput(pInp, doneClass);
  setupDateInput(sInp, doneClass);
  setupDateInput(eInp, doneClass);
  // Update badge on date entry
  [sInp, eInp].forEach(inp => inp.addEventListener('blur', () => {
  const badge = document.getElementById(`st-${proc.id}`);
  if (!badge) return;
  const s = document.getElementById(`${proc.id}S`)._display;
  const e = document.getElementById(`${proc.id}E`)._display;
  if (s && e)  { badge.className='proc-status s-done'; badge.textContent='Done'; }
  else if (s || e) { badge.className='proc-status s-prog'; badge.textContent='Active'; }
  else  { badge.className='proc-status s-pend'; badge.textContent='Pending'; }
  recalcProgress();
  }));
  return;
  }

  card.innerHTML = `
  <div class="process-card-hd">
  <span class="dot"></span>
  <span>${proc.label}</span>
  <span class="proc-status s-pend" id="st-${proc.id}">Pending</span>
  </div>
  <div class="process-card-body">
  <div class="date-row">
  <label>Status</label>
  <select id="req-${proc.id}" class="req-select" onchange="onReqChange('${proc.id}','${doneClass}',this)">
  <option value="">&#8212; Select &#8212;</option>
  <option value="Required">Required</option>
  <option value="Not Required">Not Required</option>
  </select>
  </div>
  <div id="dates-${proc.id}" style="display:none;flex-direction:column;gap:8px;margin-top:6px;">
  <div class="date-row">
  <label>Planned Date</label>
  <input type="text" class="date-txt" id="${proc.id}P" placeholder="DDMM → DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  <div class="date-row">
  <label>Start Date</label>
  <input type="text" class="date-txt" id="${proc.id}S" placeholder="DDMM → DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  <div class="date-row">
  <label>End Date</label>
  <input type="text" class="date-txt" id="${proc.id}E" placeholder="DDMM → DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  </div>
  </div>`;
  container.appendChild(card);
  setupDateInput(card.querySelector(`#${proc.id}P`), doneClass);
  setupDateInput(card.querySelector(`#${proc.id}S`), doneClass);
  setupDateInput(card.querySelector(`#${proc.id}E`), doneClass);
}

function onReqChange(procId, doneClass, sel) {
  const wrap  = document.getElementById(`dates-${procId}`);
  const badge = document.getElementById(`st-${procId}`);
  if (sel.value === 'Required') {
  wrap.style.display = 'flex';
  sel.style.borderColor = 'rgba(37,99,235,.4)'; sel.style.background = '#eff6ff'; sel.style.color = 'var(--accent)'; sel.style.fontWeight = '600';
  if (badge) { badge.className = 'proc-status s-prog'; badge.textContent = 'Active'; }
  document.getElementById(`${procId}P`)?.focus();
  } else {
  wrap.style.display = 'none';
  ['P','S','E'].forEach(sfx => { const el = document.getElementById(`${procId}${sfx}`); if (el) { el.value=''; el._iso=''; el._display=''; el.className='date-txt'; } });
  if (sel.value === 'Not Required') {
  sel.style.borderColor = 'rgba(100,116,139,.35)'; sel.style.background = '#f8fafc'; sel.style.color = 'var(--muted)'; sel.style.fontWeight = '500';
  if (badge) { badge.className = 'proc-status s-pend'; badge.textContent = 'Not Required'; }
  } else {
  sel.style.cssText = '';
  if (badge) { badge.className = 'proc-status s-pend'; badge.textContent = 'Pending'; }
  }
  }
  recalcProgress();
}

/* == SF BIN card == */
function buildSFBinCard(container) {
  const card = document.createElement('div');
  card.className = 'process-card sfbin-card';
  card.id = 'pc-sfbBin';
  card.innerHTML = `
  <div class="process-card-hd"><span class="dot"></span><span>SF BIN Received</span><span class="proc-status s-pend" id="st-sfbBin">Pending</span></div>
  <div class="process-card-body">
  <div class="date-row">
  <label>Status</label>
  <select id="sfbBin" class="sfbin-select" onchange="onSFBinChange(this)">
  <option value="">&#8212; Select &#8212;</option>
  <option value="Verified & Received">Verified &amp; Received</option>
  <option value="Not Received">Not Received</option>
  </select>
  </div>
  <div id="sfbin-extra" style="display:none;flex-direction:column;gap:8px;margin-top:4px;">
  <div class="date-row">
  <label>Planned Date</label>
  <input type="text" class="date-txt" id="sfbPlanDate" placeholder="DDMM → DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  <div class="date-row">
  <label>Received Date</label>
  <input type="text" class="date-txt" id="sfbRecDate" placeholder="DDMM → DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  <div class="date-row">
  <label>Received Qty</label>
  <input type="number" class="num-input" id="sfbRecQty" placeholder="0" min="0" oninput="recalcProgress()">
  </div>
  </div>
  </div>`;
  container.appendChild(card);
  setupDateInput(card.querySelector('#sfbPlanDate'), 'edge-done');
  setupDateInput(card.querySelector('#sfbRecDate'), 'edge-done');
}

function onSFBinChange(sel) {
  const extra = document.getElementById('sfbin-extra');
  const badge = document.getElementById('st-sfbBin');
  const isVerif = sel.value === 'Verified & Received';
  extra.style.display = isVerif ? 'flex' : 'none';
  if (isVerif) {
  document.getElementById('sfbPlanDate')?.focus();
  if (badge) { badge.className = 'proc-status s-prog'; badge.textContent = 'Active'; }
  } else if (sel.value === 'Not Received') {
  const pd = document.getElementById('sfbPlanDate'); const rd = document.getElementById('sfbRecDate'); const rq = document.getElementById('sfbRecQty');
  if (pd) { pd.value=''; pd._iso=''; pd._display=''; pd.className='date-txt'; }
  if (rd) { rd.value=''; rd._iso=''; rd._display=''; rd.className='date-txt'; }
  if (rq) rq.value = '';
  if (badge) { badge.className = 'proc-status s-pend'; badge.textContent = 'Not Received'; }
  } else {
  if (badge) { badge.className = 'proc-status s-pend'; badge.textContent = 'Pending'; }
  }
  recalcProgress();
}

/* == BSF Item card == */
function buildBSFItemCard(container) {
  const card = document.createElement('div');
  card.className = 'process-card edge-num';
  card.id = 'pc-bsfItem';
  card.innerHTML = `
  <div class="process-card-hd"><span class="dot"></span><span>BSF Item Yet to Be Received</span><span class="proc-status s-pend" id="st-bsfItem">Pending</span></div>
  <div class="process-card-body">
  <div class="date-row">
  <label>Shortage Qty</label>
  <input type="number" class="num-input" id="bsfItem" placeholder="&#8212;" min="0" readonly style="cursor:default;" oninput="recalcProgress()">
  </div>
  <div class="date-row" style="margin-top:4px;">
  <label>Status</label>
  <select id="bsfStatus" class="bsf-select" onchange="onBSFStatusChange(this)" disabled style="opacity:.4;cursor:not-allowed;">
  <option value="">&#8212; Enter shortage to unlock &#8212;</option>
  <option value="Verify and Receive">Verify and Receive</option>
  <option value="Not Received">Not Received</option>
  </select>
  </div>
  <div id="bsf-date-wrap" style="display:none;flex-direction:column;gap:6px;margin-top:6px;">
  <div class="date-row">
  <label>Planned Date</label>
  <input type="text" class="date-txt" id="bsfPlanDate" placeholder="DDMM → DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  <div class="date-row">
  <label>Received Date</label>
  <input type="text" class="date-txt" id="bsfRecDate" placeholder="DDMM → DD/MM/YYYY" maxlength="10" autocomplete="off">
  </div>
  </div>
  </div>`;
  container.appendChild(card);
  setupDateInput(card.querySelector('#bsfPlanDate'), 'edge-done');
  setupDateInput(card.querySelector('#bsfRecDate'), 'edge-done');
}

function triggerBSFAlert() {
  const card = document.getElementById('pc-bsfItem');
  const sel  = document.getElementById('bsfStatus');
  if (!card || !sel) return;
  if (sel.value !== 'Verify and Receive') {
  card.classList.add('bsf-alert');
  const badge = document.getElementById('st-bsfItem');
  if (badge) { badge.className = 'proc-status s-prog'; badge.textContent = '⚠ Action Needed'; }
  showToast('🔴', 'BSF Item — Please Verify and Receive!', true);
  }
}

function onBSFStatusChange(sel) {
  const card = document.getElementById('pc-bsfItem');
  const dateWrap = document.getElementById('bsf-date-wrap');
  const badge = document.getElementById('st-bsfItem');
  if (sel.value === 'Verify and Receive') {
  card.classList.remove('bsf-alert');
  sel.classList.add('verified');
  dateWrap.style.display = 'flex';
  if (badge) { badge.className = 'proc-status s-done'; badge.textContent = 'Verifying'; }
  document.getElementById('bsfPlanDate')?.focus();
  } else {
  card.classList.add('bsf-alert');
  sel.classList.remove('verified');
  dateWrap.style.display = 'none';
  const pd = document.getElementById('bsfPlanDate');
  const rd = document.getElementById('bsfRecDate');
  if (pd) { pd.value=''; pd._iso=''; pd._display=''; pd.className='date-txt'; }
  if (rd) { rd.value=''; rd._iso=''; rd._display=''; rd.className='date-txt'; }
  if (badge) { badge.className = 'proc-status s-prog'; badge.textContent = '⚠ Action Needed'; }
  }
  recalcProgress();
}

/* == Initialise grids == */
const coreGrid   = document.getElementById('core-grid');
const edgeBinGrd = document.getElementById('edge-bin-grid');
const edgeGrid   = document.getElementById('edge-grid');
CORE_PROCESSES.forEach(p => buildProcessCard(p, 'core', coreGrid));
buildSFBinCard(edgeBinGrd);
buildBSFItemCard(edgeBinGrd);
EDGE_PROCESSES.forEach(p => buildProcessCard(p, 'edge', edgeGrid));

/* Wire smart date to Received Shortage Date */
(function(){
  const inp = document.getElementById('rcvd-shortage-date');
  if (inp) setupDateInput(inp, 'edge-done');
})();

/* Wire smart date to W/O Created Date */
(function(){ const inp = document.getElementById('po-entry-date'); if (inp) setupDateInput(inp, 'core-done'); })();

/* Lock Core Team by default */
document.getElementById('core-card').classList.add('locked');

/* == Progress recalc == */
function recalcProgress() {
  const coreUnlocked = !document.getElementById('core-card').classList.contains('locked');
  let total=0, done=0, inprog=0;
  if (coreUnlocked) {
  let coreDone = 0;
  CORE_PROCESSES.forEach(p => {
  total++;
  const reqSel = document.getElementById(`req-${p.id}`);
  const s = document.getElementById(`${p.id}S`);
  const e = document.getElementById(`${p.id}E`);
  const badge = document.getElementById(`st-${p.id}`);
  if (reqSel?.value === 'Not Required') { done++; coreDone++; if (badge) { badge.className='proc-status s-done'; badge.textContent='Not Required'; } }
  else if (reqSel?.value === 'Required') {
  const hasS=s?._iso, hasE=e?._iso;
  if (hasS&&hasE) { done++; coreDone++; if (badge) { badge.className='proc-status s-done'; badge.textContent='Done'; } }
  else if (hasS) { inprog++; if (badge) { badge.className='proc-status s-prog'; badge.textContent='Active'; } }
  else { if (badge) { badge.className='proc-status s-prog'; badge.textContent='Active'; } }
  } else { if (badge) { badge.className='proc-status s-pend'; badge.textContent='Pending'; } }
  });
  if (coreDone === CORE_PROCESSES.length && !recalcProgress._coreCompletionDone) {
  recalcProgress._coreCompletionDone = true;
  const aqtyEl = document.getElementById('storeblanks');
  const shortageEl = document.getElementById('shortage');
  const currentAQTY = parseFloat(aqtyEl.value) || 0;
  const currentShortage = parseFloat(shortageEl.value) || 0;
  if (currentShortage > 0) {
  aqtyEl.value = currentAQTY + currentShortage;
  aqtyEl.style.cssText = 'background:#f0fdf4;color:var(--success);border-color:rgba(16,185,129,.4);font-weight:700;box-shadow:0 0 0 3px rgba(16,185,129,.15);';
  shortageEl.value = 0;
  shortageEl.style.cssText = 'background:#f0fdf4;color:var(--success);border-color:rgba(16,185,129,.4);font-weight:700;box-shadow:0 0 0 3px rgba(16,185,129,.15);';
  const bsfEl = document.getElementById('bsfItem');
  if (bsfEl) { bsfEl.value = currentShortage; }
  document.getElementById('af-note').classList.remove('show');
  setTimeout(triggerBSFAlert, 300);
  showToast('✦', `Core Team complete! AQTY updated to ${currentAQTY + currentShortage}`);
  }
  } else if (coreDone < CORE_PROCESSES.length) { recalcProgress._coreCompletionDone = false; }
  }
  const sfBinSel = document.getElementById('sfbBin');
  const sfRecDate = document.getElementById('sfbRecDate');
  total++;
  if (sfBinSel?.value === 'Verified & Received' && sfRecDate?._iso) done++;
  else if (sfBinSel?.value) inprog++;
  const bsfStatusSel = document.getElementById('bsfStatus');
  const bsfRecDate = document.getElementById('bsfRecDate');
  total++;
  if (bsfStatusSel?.value === 'Verify and Receive' && bsfRecDate?._iso) done++;
  else if (bsfStatusSel?.value) inprog++;
  EDGE_PROCESSES.forEach(p => {
  total++;
  const reqSel = document.getElementById(`req-${p.id}`);
  const s = document.getElementById(`${p.id}S`);
  const e = document.getElementById(`${p.id}E`);
  const badge = document.getElementById(`st-${p.id}`);
  if (reqSel?.value === 'Not Required') { done++; if (badge) { badge.className='proc-status s-done'; badge.textContent='Not Required'; } }
  else if (reqSel?.value === 'Required') {
  const hasS=s?._iso, hasE=e?._iso;
  if (hasS&&hasE) { done++; if (badge) { badge.className='proc-status s-done'; badge.textContent='Done'; } }
  else if (hasS) { inprog++; if (badge) { badge.className='proc-status s-prog'; badge.textContent='Active'; } }
  else { if (badge) { badge.className='proc-status s-prog'; badge.textContent='Active'; } }
  } else { if (badge) { badge.className='proc-status s-pend'; badge.textContent='Pending'; } }
  });
  const pct = total ? Math.round(done/total*100) : 0;
  document.getElementById('big-bar').style.width = pct+'%';
  document.getElementById('pct-label').textContent = pct+'%';
  document.getElementById('cnt-done').textContent = done;
  document.getElementById('cnt-prog').textContent = inprog;
  document.getElementById('cnt-pend').textContent = total-done-inprog;
  document.getElementById('seg-done').textContent = `${done} completed`;
  document.getElementById('seg-prog').textContent = `${inprog} in progress`;
  document.getElementById('seg-pend').textContent = `${total-done-inprog} pending`;
  const circ=88, offset=circ-(pct/100)*circ;
  document.getElementById('ring-val').style.strokeDashoffset = offset;
  document.getElementById('ring-txt').textContent = pct+'%';
}

/* == Helpers == */
function colorPriority(sel){sel.className='';if(sel.value)sel.classList.add(`prio-${sel.value}`);}
function dv(id){const el=document.getElementById(id);return el?._display||el?.value||'';}
function fv(id){return document.getElementById(id)?.value||'';}

/* == Save == */
function saveForm(){
  const wo=fv('wo');
  if(!wo){showToast('⚠','W/O # is required',true);return;}
  if(wo.includes('/')){showToast('⚠','W/O # cannot contain "/" — use "-" instead (e.g. SMTPP8-26-27)',true);document.getElementById('wo')?.focus();return;}
  const customer = fv('customer');
  const division = fv('division');
  if(!customer){showToast('⚠','Customer Name is required',true);return;}
  if(!validateCustomerSelection(true)){return;}
  if(!division){showToast('⚠','Division is required',true);return;}
  const record = {
  id: wo, customer: fv('customer'), division: fv('division'), priority: fv('priority'),
  coating: fv('coating'), electrode: fv('electrode'), design: fv('design'), customDate: dv('custom-note'),
  orderQty: fv('orderqty'), orderValue: fv('ordervalue'), storeAQTY: fv('storeblanks'), binNumber: fv('binNumber'),
  rcvdShortageStatus: fv('rcvd-shortage-status'), rcvdShortageDate: dv('rcvd-shortage-date'), rcvdShortageQty: fv('rcvd-shortage-qty'),
  shortage: fv('shortage'), trail: fv('trail'), poAdvance: fv('po-advance'),
  poDateTime: fv('po-datetime'), poEntryDate: dv('po-entry-date'), woIssueDate: dv('del-start'),
  weeks: fv('del-weeks'), deliveryDate: document.getElementById('del-result')?.textContent?.trim() || '',
  sfBinStatus: fv('sfbBin'), sfRecDate: dv('sfbRecDate'), sfRecQty: fv('sfbRecQty'),
  bsfQty: fv('bsfItem'), bsfStatus: fv('bsfStatus'), bsfRecDate: dv('bsfRecDate'),
  sfPlanDate: dv('sfbPlanDate'),
  coreProcesses: CORE_PROCESSES.map(p=>({ id:p.id, label:p.label, req:fv(`req-${p.id}`), planned:dv(`${p.id}P`), start:dv(`${p.id}S`), end:dv(`${p.id}E`) })),
  edgeProcesses: EDGE_PROCESSES.map(p=>({ id:p.id, label:p.label, req:fv(`req-${p.id}`), planned:dv(`${p.id}P`), start:dv(`${p.id}S`), end:dv(`${p.id}E`) })),
  bsfPlanDate: dv('bsfPlanDate'),
  customDesignDates: CORE_PROCESSES.map(p=>({ id:p.id, label:p.label, req:fv(`cd-req-${p.id}`), planned:dv(`cd-${p.id}P`), start:dv(`cd-${p.id}S`), end:dv(`cd-${p.id}E`) })),
  progress: document.getElementById('pct-label')?.textContent || '0%',
  savedAt: new Date().toISOString()
  };
  fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(record)
  })
  .then(r => r.json().then(j => ({ ok: r.ok, body: j })))
  .then(({ ok, body }) => {
    if (!ok) throw new Error(body.error || 'Save failed');
    showToast('✦', `W/O "${wo}" saved successfully`);
    loadCustomerNames();
    loadOrders().then(() => renderDB());
  })
  .catch(e => showToast('⚠', e.message, true));
}

/* == Reset == */
function resetForm(){
  if(!confirm('Reset all fields? This cannot be undone.'))return;
  ['wo','customer','division','priority','coating','electrode','orderqty','ordervalue','storeblanks','binNumber','trail','po-advance','rcvd-shortage-status','rcvd-shortage-qty'].forEach(id=>{
  const el=document.getElementById(id);if(el)el.value='';
  });
  document.getElementById('po-datetime').value = '';
  document.getElementById('po-datetime-field').style.display = 'none';
  const poEd = document.getElementById('po-entry-date');
  if (poEd) { poEd.value=''; poEd._iso=''; poEd._display=''; poEd.className='date-txt'; }
  const delStart = document.getElementById('del-start');
  if (delStart) { delStart.value=''; delStart._iso=''; delStart._display=''; delStart.className='date-txt'; }
  document.getElementById('del-weeks').value = '';
  const delRes = document.getElementById('del-result');
  if (delRes) { delRes.textContent='Auto-calculated'; delRes.className='delivery-date-result empty'; }
  document.getElementById('del-skipped-field').style.display = 'none';
  document.getElementById('del-skip-badge').classList.remove('show');
  const shortEl = document.getElementById('shortage');
  shortEl.value = ''; shortEl.style.cssText = '';
  document.getElementById('storeblanks').style.cssText = '';
  recalcProgress._coreCompletionDone = false;
  onShortageChange(shortEl);
  document.getElementById('priority').className='';
  document.getElementById('design').value='';
  const cn = document.getElementById('custom-note');
  cn.value=''; cn._iso=''; cn._display=''; cn.disabled=true; cn.className='date-txt';
  document.getElementById('custom-wrap').classList.remove('visible');
  document.getElementById('af-note').classList.remove('show');
  document.getElementById('core-card').classList.add('locked');
  document.getElementById('core-badge').textContent='🔒 LOCKED';
  document.getElementById('core-badge').style.background='rgba(239,68,68,.2)';
  document.getElementById('core-badge').style.color='#fca5a5';
  [...CORE_PROCESSES,...EDGE_PROCESSES].forEach(p=>{
  const reqSel = document.getElementById(`req-${p.id}`);
  if (reqSel) { reqSel.value=''; reqSel.style.cssText=''; }
  const dateWrap = document.getElementById(`dates-${p.id}`);
  if (dateWrap) dateWrap.style.display = 'none';
  ['P','S','E'].forEach(sfx=>{ const el=document.getElementById(`${p.id}${sfx}`); if(el){el.value='';el._iso='';el._display='';el.className='date-txt';} });
  const badge=document.getElementById(`st-${p.id}`); if(badge){badge.className='proc-status s-pend';badge.textContent='Pending';}
  });
  const sfSel = document.getElementById('sfbBin'); if (sfSel) sfSel.value = '';
  const sfPd = document.getElementById('sfbPlanDate'); if (sfPd) { sfPd.value=''; sfPd._iso=''; sfPd._display=''; sfPd.className='date-txt'; }
  const sfRd = document.getElementById('sfbRecDate'); if (sfRd) { sfRd.value=''; sfRd._iso=''; sfRd._display=''; sfRd.className='date-txt'; }
  const sfRq = document.getElementById('sfbRecQty'); if (sfRq) sfRq.value = '';
  const sfExtra = document.getElementById('sfbin-extra'); if (sfExtra) sfExtra.style.display = 'none';
  const sfBadge = document.getElementById('st-sfbBin'); if (sfBadge) { sfBadge.className='proc-status s-pend'; sfBadge.textContent='Pending'; }
  const bsfEl = document.getElementById('bsfItem'); if (bsfEl) bsfEl.value = '';
  const bsfSel = document.getElementById('bsfStatus');
  if (bsfSel) { bsfSel.value=''; bsfSel.classList.remove('verified'); bsfSel.disabled=true; bsfSel.style.opacity='.4'; bsfSel.style.cursor='not-allowed'; if(bsfSel.options[0]) bsfSel.options[0].text='— Enter shortage to unlock —'; }
  const bsfCard = document.getElementById('pc-bsfItem'); if (bsfCard) bsfCard.classList.remove('bsf-alert');
  const bsfDW = document.getElementById('bsf-date-wrap'); if (bsfDW) bsfDW.style.display = 'none';
  const bsfPd = document.getElementById('bsfPlanDate'); if (bsfPd) { bsfPd.value=''; bsfPd._iso=''; bsfPd._display=''; bsfPd.className='date-txt'; }
  const bsfRd = document.getElementById('bsfRecDate'); if (bsfRd) { bsfRd.value=''; bsfRd._iso=''; bsfRd._display=''; bsfRd.className='date-txt'; }
  const bsfBadge = document.getElementById('st-bsfItem'); if (bsfBadge) { bsfBadge.className='proc-status s-pend'; bsfBadge.textContent='Pending'; }
  recalcProgress();
  showToast('↺','Form reset');
  const rssEl2 = document.getElementById('rcvd-shortage-status');
  if (rssEl2) { rssEl2.value=''; onRcvdShortageChange(rssEl2); }
  const coatCard = document.getElementById('pc-coating');
  if (coatCard) coatCard.style.display = 'none';
  const elCard = document.getElementById('pc-electrode');
  if (elCard) elCard.style.display = 'none';
  const trailCard = document.getElementById('pc-trailDate');
  if (trailCard) trailCard.style.display = 'none';
  _setCustomerInputState(true);
  hideCustomerSuggestions();
  // Hide and clear custom design card
  const cdCard = document.getElementById('custom-design-card');
  if (cdCard) cdCard.style.display = 'none';
  const cdGrid = document.getElementById('custom-design-grid');
  if (cdGrid) {
  cdGrid.querySelectorAll('.date-txt').forEach(inp => {
  inp.value=''; inp._iso=''; inp._display=''; inp.className='date-txt';
  });
  cdGrid.querySelectorAll('.req-select').forEach(sel => { sel.value=''; });
  cdGrid.querySelectorAll('[id^="cd-dates-"]').forEach(w => { w.style.display='none'; });
  cdGrid.querySelectorAll('[id^="cd-st-"]').forEach(b => { b.className='proc-status s-pend'; b.textContent='Pending'; });
  }
  _setAttachmentUI(null);
}

/* == Export CSV == */
function exportCSV(){
  const rows=[
  ['Field','Value'],
  ['W/O #', fv('wo')], ['Customer Name', fv('customer')], ['Division', fv('division')],
  ['Priority', fv('priority')], ['Coating Required', fv('coating')], ['Electrode Required', fv('electrode')],
  ['Electrode Start Date', dv('electrodeS')], ['Electrode End Date', dv('electrodeE')],
  ['Order Qty', fv('orderqty')], ['Store Blanks AQTY', fv('storeblanks')],
  ['Shortage of Store Blank', fv('shortage')], ['Trail', fv('trail')],
  ['P.O Advance Received', fv('po-advance')], ['P.O Advance Received On', fv('po-datetime')],
  ['W/O Created Date', dv('po-entry-date')], ['Design Type', fv('design')], ['Custom Drawing Date', dv('custom-note')],
  [], ['Process','Planned Date','Start Date','End Date'],
  ...CORE_PROCESSES.map(p=>[p.label, dv(`${p.id}P`), dv(`${p.id}S`), dv(`${p.id}E`)]),
  ['SF BIN Status', fv('sfbBin')], ['SF BIN Planned Date', dv('sfbPlanDate')], ['SF BIN Received Date', dv('sfbRecDate')], ['SF BIN Received Qty', fv('sfbRecQty')],
  ['BSF Item Yet to Be Received (Qty)', fv('bsfItem')], ['BSF Item Status', fv('bsfStatus')], ['BSF Item Planned Date', dv('bsfPlanDate')], ['BSF Item Received Date', dv('bsfRecDate')],
  ...EDGE_PROCESSES.map(p=>[p.label, dv(`${p.id}P`), dv(`${p.id}S`), dv(`${p.id}E`)]),
  ];
  const csv=rows.map(r=>r.map(c=>`"${sanitizeCSV(c||'').replace(/"/g,'""')}"`).join(',')).join('\n');
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));
  a.download=`WorkOrder-${fv('wo')||'Draft'}-${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  showToast('⬇','CSV exported');
}

/* == Toast == */
let _tt;
function showToast(ico,msg,warn=false){
  const el=document.getElementById('toast');
  document.getElementById('t-ico').textContent=ico;
  document.getElementById('t-msg').textContent=msg;
  el.style.borderLeftColor=warn?'var(--warn)':'var(--success)';
  el.classList.add('show'); clearTimeout(_tt);
  _tt=setTimeout(()=>el.classList.remove('show'),2800);
}

/* == Delivery Calculator == */
const HOLIDAYS = {
  "2025-01-01":"New Year's Day","2025-01-14":"Pongal","2025-01-26":"Republic Day",
  "2025-02-26":"Maha Shivaratri","2025-03-14":"Holi","2025-03-30":"Ram Navami",
  "2025-03-31":"Eid ul-Fitr","2025-04-10":"Mahavir Jayanti","2025-04-14":"Dr. Ambedkar Jayanti",
  "2025-04-18":"Good Friday","2025-05-01":"Labour Day","2025-06-07":"Eid ul-Adha",
  "2025-07-06":"Muharram","2025-08-15":"Independence Day","2025-08-16":"Onam",
  "2025-08-27":"Janmashtami","2025-09-05":"Vinayaka Chaturthi","2025-10-02":"Gandhi Jayanti",
  "2025-10-03":"Dussehra","2025-10-20":"Diwali","2025-11-05":"Guru Nanak Jayanti","2025-12-25":"Christmas Day",
  "2026-01-01":"New Year's Day","2026-01-14":"Pongal","2026-01-26":"Republic Day",
  "2026-02-15":"Maha Shivaratri","2026-03-04":"Holi","2026-03-19":"Ugadi",
  "2026-03-21":"Eid ul-Fitr","2026-03-26":"Ram Navami","2026-03-31":"Mahavir Jayanti",
  "2026-04-03":"Good Friday","2026-05-01":"Labour Day","2026-05-27":"Eid ul-Adha",
  "2026-06-26":"Muharram","2026-07-16":"Rath Yatra","2026-08-15":"Independence Day",
  "2026-08-26":"Onam / Milad-un-Nabi","2026-08-28":"Raksha Bandhan","2026-09-04":"Janmashtami",
  "2026-09-14":"Vinayaka Chaturthi","2026-10-02":"Gandhi Jayanti","2026-10-20":"Dussehra",
  "2026-11-08":"Diwali","2026-11-24":"Guru Nanak Jayanti","2026-12-25":"Christmas Day"
};
function _delKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function _isSun(d){return d.getDay()===0;}
function _isHol(d){return !!HOLIDAYS[_delKey(d)];}
function _isSkip(d){return _isSun(d)||_isHol(d);}
function _fmtDel(d){return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;}

function calcDelivery(){
  const startEl=document.getElementById('del-start');
  const weeksEl=document.getElementById('del-weeks');
  const resEl=document.getElementById('del-result');
  const skField=document.getElementById('del-skipped-field');
  const skSel=document.getElementById('del-skipped-sel');
  const skBadge=document.getElementById('del-skip-badge');
  const isoStart=startEl._iso;
  const weeks=parseInt(weeksEl.value);
  if(!isoStart||!weeks||weeks<1){resEl.textContent='Auto-calculated';resEl.className='delivery-date-result empty';skField.style.display='none';skBadge.classList.remove('show');return;}
  let d=new Date(isoStart+'T12:00:00');
  const totalDays=weeks*7;
  const skipped=[];let counted=0;
  while(counted<totalDays){d.setDate(d.getDate()+1);if(_isSkip(d)){skipped.push({date:_fmtDel(d),reason:_isSun(d)?'Sunday':HOLIDAYS[_delKey(d)]});}else{counted++;}}
  while(_isSkip(d)){skipped.push({date:_fmtDel(d),reason:_isSun(d)?'Sunday':HOLIDAYS[_delKey(d)]});d.setDate(d.getDate()+1);}
  resEl.textContent=_fmtDel(d);resEl.className='delivery-date-result has-date';
  if(skipped.length>0){
  skSel.innerHTML=`<option value="">── ${skipped.length} day${skipped.length>1?'s':''} skipped ──</option>`;
  skipped.forEach(s=>{const o=document.createElement('option');o.value=s.date;o.textContent=`${s.date}  —  ${s.reason}`;skSel.appendChild(o);});
  skBadge.textContent=`⚠ ${skipped.length} day${skipped.length>1?'s':''} skipped (Sundays + Holidays)`;
  skBadge.classList.add('show');skField.style.display='block';
  } else {skField.style.display='none';skBadge.classList.remove('show');}
}

(function wireDelivery(){
  const inp=document.getElementById('del-start');
  if(!inp)return;
  setupDateInput(inp,'core-done');
  inp.addEventListener('blur',()=>setTimeout(calcDelivery,60));
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key==='Tab')setTimeout(calcDelivery,80);});
  document.getElementById('del-weeks').addEventListener('change',calcDelivery);
  document.getElementById('del-weeks').addEventListener('blur',calcDelivery);
})();

/* ======= USER MANAGEMENT FUNCTIONS ======= */
const MAX_USERS = 15;
/* ── Load/Save USERS from localStorage ── */

/* ── LOGIN ── */

/* ── RENDER ALL ── */
function umRenderAll() {
  umRenderStats();
  umRenderTable();
  umUpdateLimitNote();
}

function umRenderStats() {
  const keys = Object.keys(USERS);
  const admins  = keys.filter(k => USERS[k].isAdmin).length;
  const ops  = keys.filter(k => !USERS[k].isAdmin && USERS[k].role==='Operator').length;
  const sups  = keys.filter(k => USERS[k].role==='Supervisor').length;
  const slots   = MAX_USERS - keys.length;
  const stats = [
  { v:keys.length, l:'Total Users',  c:'var(--accent)',  i:'👥' },
  { v:admins,  l:'Administrators',   c:'#f59e0b',  i:'🛡' },
  { v:sups,  l:'Supervisors',  c:'var(--success)', i:'👔' },
  { v:slots,  l:'Slots Available',  c:slots>0?'var(--success)':'var(--danger)', i:'📋' },
  ];
  document.getElementById('stats-row').innerHTML = stats.map(s=>`
  <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r);box-shadow:var(--shadow-card);padding:16px 18px;">
  <div style="font-size:22px;margin-bottom:8px;">${s.i}</div>
  <div style="font-family:var(--font-hd);font-size:26px;font-weight:700;color:${s.c};line-height:1;">${s.v}</div>
  <div style="font-family:var(--font-mn);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-top:5px;">${s.l}</div>
  </div>`).join('');
}

function umUpdateLimitNote() {
  const cnt = Object.keys(USERS).length;
  const note = document.getElementById('user-limit-note');
  note.textContent = cnt >= MAX_USERS ? `Maximum ${MAX_USERS} users reached` : `${MAX_USERS - cnt} slots remaining`;
  note.style.color = cnt >= MAX_USERS ? '#f87171' : 'rgba(255,255,255,.5)';
}

function umRenderTable() {
  const tbody = document.getElementById('user-tbody');
  tbody.innerHTML = Object.keys(USERS).map(k => {
  const u = USERS[k];
  const roleCls = u.isAdmin ? 'badge-admin' : u.role==='Supervisor' ? 'badge-sup' : 'badge-user';
  const sections = u.sections || [];
  const secLabel = sections.length === ALL_SECTIONS.length
  ? '<span style="color:var(--success);font-weight:600;">All sections</span>'
  : `${sections.length} / ${ALL_SECTIONS.length} sections`;
  const canDelete = !u.isAdmin;
  const sk = escapeHtml(k);
  const sName = escapeHtml(u.name);
  const sRole = escapeHtml(u.role);
  return `<tr>
  <td><span style="font-weight:600;">${sName}</span></td>
  <td><span style="font-family:var(--font-mn);font-size:11px;color:var(--accent);">${sk}</span></td>
  <td><span class="badge ${roleCls}">${sRole}</span></td>
  <td><span style="font-family:var(--font-mn);font-size:11px;color:var(--muted);">${secLabel}</span></td>
  <td>
  <div style="display:flex;gap:6px;flex-wrap:wrap;">
  <button onclick="umOpenEdit('${sk}')" style="background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.2);color:var(--accent);border-radius:3px;padding:5px 12px;cursor:pointer;font-family:var(--font-mn);font-size:10px;font-weight:700;">✎ Edit</button>
  ${canDelete ? `<button onclick="umDeleteUser('${sk}')" style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);color:#ef4444;border-radius:3px;padding:5px 12px;cursor:pointer;font-family:var(--font-mn);font-size:10px;font-weight:700;">🗑 Delete</button>` : '<span style="font-size:10px;color:var(--muted);font-family:var(--font-mn);padding:5px;">Protected</span>'}
  </div>
  </td>
  </tr>`;
  }).join('');
}

/* ── ADD USER ── */
function umAddUser() {
  const key  = document.getElementById('new-key').value.trim().replace(/\s+/g,'');
  const name = document.getElementById('new-name').value.trim();
  const role = document.getElementById('new-role').value;
  const pass = document.getElementById('new-pass').value.trim();
  if (!key||!name||!pass) { showToast('⚠','All fields required',true); return; }
  if (Object.keys(USERS).length >= MAX_USERS) { showToast('⚠',`Maximum ${MAX_USERS} users reached`,true); return; }
  if (USERS[key]) { showToast('⚠','Username already exists',true); return; }
  fetch('/api/app-users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ key, name, role, password: pass, isAdmin: role === 'Administrator', sections: ALL_SECTIONS.map(s=>s.id) })
  }).then(r => {
  if (!r.ok) return r.json().then(d => { throw new Error(d.error || 'Error'); });
  ['new-key','new-name','new-pass'].forEach(id=>{ document.getElementById(id).value=''; });
  _refreshUsers(() => { umRenderAll(); showToast('✓',`${name} added`); });
  }).catch(err => showToast('⚠', err.message || 'Failed to add user', true));
}

/* ── DELETE USER ── */
function umDeleteUser(key) {
  const u = USERS[key];
  if (!u||u.isAdmin) { showToast('⚠','Cannot delete admin users',true); return; }
  if (!confirm(`Delete "${u.name}"? This cannot be undone.`)) return;
  fetch(`/api/app-users/${encodeURIComponent(key)}`, { method: 'DELETE' })
  .then(r => {
  if (!r.ok) return r.json().then(d => { throw new Error(d.error || 'Error'); });
  umCancelEdit();
  _refreshUsers(() => { umRenderAll(); showToast('🗑',`${u.name} deleted`); });
  })
  .catch(err => showToast('⚠', err.message || 'Failed to delete', true));
}

/* ── EDIT / ASSIGN ── */
let _umEditKey = null;
function umOpenEdit(key) {
  _umEditKey = key;
  const u = USERS[key];
  document.getElementById('edit-title').textContent = `Edit User — ${u.name}`;
  document.getElementById('edit-name').value = u.name;
  document.getElementById('edit-role').value = u.role;
  document.getElementById('edit-pass').value = '';
  const allowed = u.sections || [];
  document.getElementById('sec-checkboxes').innerHTML = ALL_SECTIONS.map(s=>`
  <label class="sec-item">
  <input type="checkbox" id="cb-${s.id}" ${allowed.includes(s.id)?'checked':''}>
  ${s.label}
  </label>`).join('');
  const panel = document.getElementById('edit-panel');
  panel.style.display = 'block';
  panel.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

function umSelectAll(val) {
  ALL_SECTIONS.forEach(s => {
  const cb = document.getElementById(`cb-${s.id}`);
  if (cb) cb.checked = val;
  });
}

function umSaveEdit() {
  if (!_umEditKey) return;
  const name = document.getElementById('edit-name').value.trim();
  const role = document.getElementById('edit-role').value;
  const pass = document.getElementById('edit-pass').value.trim();
  if (!name) { showToast('⚠','Name cannot be empty',true); return; }
  const sections = ALL_SECTIONS.map(s=>s.id).filter(id=>{
  const cb = document.getElementById(`cb-${id}`);
  return cb && cb.checked;
  });
  const body = { name, role, isAdmin: role === 'Administrator', sections };
  if (pass) body.password = pass;
  fetch(`/api/app-users/${encodeURIComponent(_umEditKey)}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
  }).then(r => {
  if (!r.ok) return r.json().then(d => { throw new Error(d.error || 'Error'); });
  umCancelEdit();
  _refreshUsers(() => { umRenderAll(); showToast('✓',`${name} updated`); });
  }).catch(err => showToast('⚠', err.message || 'Failed to update', true));
}

function umCancelEdit() {
  _umEditKey = null;
  document.getElementById('edit-panel').style.display = 'none';
}

/* ── TOAST ── */

/* init — wrapped in DOMContentLoaded to ensure DOM exists */
function _sarasInit() {
  loadOrders();
  recalcProgress();
  /* Hide conditional cards */
  ['pc-coating','pc-electrode','pc-trailDate','custom-design-card'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  _setAttachmentUI(null);
  document.getElementById('attach-input')?.addEventListener('change', uploadAttachment);
  const customerInput = document.getElementById('customer');
  customerInput?.addEventListener('input', handleCustomerInput);
  customerInput?.addEventListener('focus', handleCustomerFocus);
  customerInput?.addEventListener('blur', handleCustomerBlur);
  customerInput?.addEventListener('keydown', handleCustomerKeydown);
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _sarasInit);
} else {
  _sarasInit();
}

let _adEditKey = null;
let _activeAdminTab = 'users';

function adRefreshCurrentTab() {
  if (_activeAdminTab === 'customers') {
    loadCustomerNames().then(() => renderCustomerAdminTable());
    return;
  }
  if (_activeAdminTab === 'users') {
    _refreshUsers(() => renderUserTable());
    return;
  }
  if (_activeAdminTab === 'um') {
    _refreshUsers(() => umRenderAll());
  }
}

function adSwitchTab(tab) {
  _activeAdminTab = tab;
  ['users','customers','um'].forEach(t => {
  const panel = document.getElementById('ad-panel-' + t);
  if (panel) panel.style.display = t === tab ? 'block' : 'none';
  const btn = document.getElementById('ad-tab-' + t);
  if (btn) {
  btn.style.background = t === tab ? 'var(--accent)' : 'transparent';
  btn.style.color  = t === tab ? '#fff' : 'rgba(255,255,255,.55)';
  }
  });
  const subtitle = document.getElementById('ad-subtitle');
  if (subtitle) subtitle.textContent = tab === 'customers' ? 'Customer master and Excel imports' : tab === 'um' ? 'Legacy user management tools' : 'User accounts and section permissions';
  if (tab === 'users') {
  renderUserTable();
  // Update limit note
  const total = Object.keys(USERS).length;
  const note = document.getElementById('ad-user-limit-note');
  if (note) note.textContent = total >= 15 ? '(Maximum 15 reached)' : `(${15 - total} slots remaining)`;
  }
  if (tab === 'customers') renderCustomerAdminTable();
  if (tab === 'um') { umRenderStats(); umRenderTable(); umUpdateLimitNote(); }
}

function _formatCustomerUpdatedAt(value) {
  if (!value) return '—';
  return String(value).replace('T', ' ').slice(0, 19) || '—';
}

function renderCustomerAdminTable() {
  const tbody = document.getElementById('ad-customer-tbody');
  if (!tbody) return;
  const query = (document.getElementById('ad-customer-search')?.value || '').trim().toLowerCase();
  const filtered = customerRecords.filter(customer => {
    const code = (customer.code || '').toLowerCase();
    const name = (customer.name || '').toLowerCase();
    return !query || code.includes(query) || name.includes(query);
  });

  const totalEl = document.getElementById('ad-customer-total');
  const codedEl = document.getElementById('ad-customer-coded');
  const uncodedEl = document.getElementById('ad-customer-uncoded');
  const shownEl = document.getElementById('ad-customer-shown');
  if (totalEl) totalEl.textContent = String(customerRecords.length);
  if (codedEl) codedEl.textContent = String(customerRecords.filter(customer => customer.code).length);
  if (uncodedEl) uncodedEl.textContent = String(customerRecords.filter(customer => !customer.code).length);
  if (shownEl) shownEl.textContent = `${filtered.length} shown`;

  if (!filtered.length) {
    tbody.innerHTML = '<tr><td colspan="4" style="padding:18px 14px;text-align:center;color:var(--muted);font-family:var(--font-mn);font-size:11px;">No customers found</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map((customer, index) => {
    const code = escapeHtml(customer.code || '—');
    const name = escapeHtml(customer.name || '');
    const updatedAt = escapeHtml(_formatCustomerUpdatedAt(customer.updatedAt));
    return `<tr style="border-bottom:1px solid var(--border);" onmouseover="this.style.background='#eef3ff'" onmouseout="this.style.background='transparent'">
      <td style="padding:10px 14px;font-family:var(--font-mn);font-size:11px;color:var(--muted);">${index + 1}</td>
      <td style="padding:10px 14px;font-family:var(--font-mn);font-size:11px;color:var(--accent);font-weight:700;">${code}</td>
      <td style="padding:10px 14px;font-size:13px;font-weight:600;color:var(--text);">${name}</td>
      <td style="padding:10px 14px;font-family:var(--font-mn);font-size:11px;color:var(--muted);">${updatedAt}</td>
    </tr>`;
  }).join('');
}

function renderUserTable() {
  const keys  = Object.keys(USERS);
  const total = keys.length;
  const limit = 15;
  document.getElementById('ad-user-count').textContent = `${total} / ${limit} users`;
  document.getElementById('ad-user-limit-note').textContent = total >= limit ? `(Maximum ${limit} reached)` : `(${limit - total} slots remaining)`;

  document.getElementById('ad-user-tbody').innerHTML = keys.map(k => {
  const u = USERS[k];
  const roleBg  = u.isAdmin ? 'rgba(245,158,11,.12)' : 'rgba(37,99,235,.1)';
  const roleCol = u.isAdmin ? '#92400e' : '#1d4ed8';
  const sections = u.sections || [];
  const secCount = sections.length;
  const canDelete = !u.isAdmin; // prevent deleting admins
  const sk = escapeHtml(k);
  const sName = escapeHtml(u.name);
  const sRole = escapeHtml(u.role);
  return `<tr style="border-bottom:1px solid var(--border);" onmouseover="this.style.background='#eef3ff'" onmouseout="this.style.background='transparent'">
  <td style="padding:10px 14px;font-size:13px;font-weight:600;color:var(--text);">${sName}</td>
  <td style="padding:10px 14px;font-family:var(--font-mn);font-size:11px;color:var(--accent);">${sk}</td>
  <td style="padding:10px 14px;"><span style="font-family:var(--font-mn);font-size:9px;font-weight:700;padding:2px 9px;border-radius:10px;background:${roleBg};color:${roleCol};">${sRole}</span></td>
  <td style="padding:10px 14px;">
  <span style="font-family:var(--font-mn);font-size:10px;color:var(--muted);">${secCount === ALL_SECTIONS.length ? 'All sections' : `${secCount} / ${ALL_SECTIONS.length} sections`}</span>
  </td>
  <td style="padding:10px 14px;">
  <div style="display:flex;gap:6px;flex-wrap:wrap;">
  <button onclick="editUser('${sk}')" style="background:rgba(37,99,235,.08);border:1px solid rgba(37,99,235,.2);color:var(--accent);border-radius:3px;padding:4px 10px;cursor:pointer;font-family:var(--font-mn);font-size:9px;font-weight:700;">✎ Edit</button>
  ${canDelete ? `<button onclick="deleteUser('${sk}')" style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);color:#ef4444;border-radius:3px;padding:4px 10px;cursor:pointer;font-family:var(--font-mn);font-size:9px;font-weight:700;">🗑 Delete</button>` : ''}
  </div>
  </td>
  </tr>`;
  }).join('');
}

function addNewUser() {
  const key  = document.getElementById('new-user-key').value.trim().replace(/\s+/g,'');
  const name = document.getElementById('new-user-name').value.trim();
  const role = document.getElementById('new-user-role').value;
  const pass = document.getElementById('new-user-pass').value.trim();
  const limit = 15;

  if (!key)  { showToast('⚠','Username (ID) is required', true); return; }
  if (!name) { showToast('⚠','Display name is required', true); return; }
  if (!pass) { showToast('⚠','Password is required', true); return; }
  if (Object.keys(USERS).length >= limit) { showToast('⚠',`Max ${limit} users reached`, true); return; }
  if (USERS[key]) { showToast('⚠','Username already exists — choose a different ID', true); return; }

  fetch('/api/app-users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ key, name, role, password: pass, isAdmin: role === 'Administrator', sections: ALL_SECTIONS.map(s=>s.id) })
  }).then(r => {
  if (!r.ok) return r.json().then(d => { throw new Error(d.error || 'Error'); });
  ['new-user-key','new-user-name','new-user-pass'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  _refreshUsers(() => { renderUserTable(); showToast('✓', `${name} added successfully`); });
  }).catch(err => showToast('⚠', err.message || 'Username already exists', true));
}

function deleteUser(key) {
  const u = USERS[key];
  if (!u || u.isAdmin) { showToast('⚠','Cannot delete admin users', true); return; }
  if (!confirm(`Delete user "${u.name}"? This cannot be undone.`)) return;
  fetch(`/api/app-users/${encodeURIComponent(key)}`, { method: 'DELETE' })
  .then(r => {
  if (!r.ok) return r.json().then(d => { throw new Error(d.error || 'Error'); });
  _refreshUsers(() => { renderUserTable(); cancelUserEdit(); showToast('🗑', `${u.name} deleted`); });
  })
  .catch(err => showToast('⚠', err.message || 'Failed to delete', true));
}

function editUser(key) {
  _adEditKey = key;
  const u = USERS[key];
  document.getElementById('ad-edit-title').textContent = `Edit User — ${u.name}`;
  document.getElementById('ad-edit-name').value = u.name;
  document.getElementById('ad-edit-role').value = u.role;
  document.getElementById('ad-edit-pass').value = '';
  /* Build section checkboxes — grouped by section */
  const allowed = u.sections || [];
  const groups = {};
  ALL_SECTIONS.forEach(s => {
  if (!groups[s.group]) groups[s.group] = [];
  groups[s.group].push(s);
  });
  document.getElementById('ad-section-checkboxes').innerHTML = Object.entries(groups).map(([grpName, fields]) => `
  <div style="grid-column:1/-1;font-family:var(--font-mn);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--accent);padding:6px 0 4px;border-bottom:1px solid var(--border);margin-top:4px;">${grpName}</div>
  ${fields.map(s => {
  const checked = allowed.includes(s.id);
  return `<label id="sec-box-${s.id}" onclick="toggleSecBox('${s.id}')" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;padding:12px 8px;background:${checked?'rgba(37,99,235,.08)':'var(--surface-2,#f7f9fd)'};border:2px solid ${checked?'var(--accent)':'var(--border)'};border-radius:var(--r);cursor:pointer;text-align:center;transition:all .15s;min-height:72px;">
  <span style="font-family:var(--font-mn);font-size:9px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:${checked?'var(--accent)':'var(--muted)'};">${s.label}</span>
  <span id="sec-tick-${s.id}" style="font-size:16px;">${checked?'✅':'⬜'}</span>
  <input type="checkbox" id="sec-cb-${s.id}" ${checked?'checked':''} style="display:none;">
  </label>`;
  }).join('')}
  `).join('');
  document.getElementById('ad-edit-user-box').style.display = 'block';
  document.getElementById('ad-edit-user-box').scrollIntoView({ behavior:'smooth', block:'nearest' });
}

function toggleSecBox(id) {
  const cb  = document.getElementById(`sec-cb-${id}`);
  const box = document.getElementById(`sec-box-${id}`);
  const tick = document.getElementById(`sec-tick-${id}`);
  const lbl  = box ? box.querySelector('span:nth-child(2)') : null;
  if (!cb) return;
  cb.checked = !cb.checked;
  if (box) {
  box.style.background  = cb.checked ? 'rgba(37,99,235,.08)' : 'var(--surface-2,#f7f9fd)';
  box.style.borderColor  = cb.checked ? 'var(--accent)' : 'var(--border)';
  }
  if (lbl) lbl.style.color  = cb.checked ? 'var(--accent)' : 'var(--muted)';
  if (tick) tick.textContent = cb.checked ? '✅' : '⬜';
}

function selectAllSections(val) {
  ALL_SECTIONS.forEach(s => {
  const cb = document.getElementById(`sec-cb-${s.id}`);
  if (cb && cb.checked !== val) toggleSecBox(s.id);
  });
}

function saveUserEdit() {
  if (!_adEditKey) return;
  const name = document.getElementById('ad-edit-name').value.trim();
  const role = document.getElementById('ad-edit-role').value;
  const pass = document.getElementById('ad-edit-pass').value.trim();
  if (!name) { showToast('⚠','Name cannot be empty', true); return; }
  const sections = ALL_SECTIONS.map(s=>s.id).filter(id => {
  const cb = document.getElementById(`sec-cb-${id}`);
  return cb && cb.checked;
  });
  const body = { name, role, isAdmin: role === 'Administrator', sections };
  if (pass) body.password = pass;
  const editKey = _adEditKey;
  fetch(`/api/app-users/${encodeURIComponent(editKey)}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body)
  }).then(r => {
  if (!r.ok) return r.json().then(d => { throw new Error(d.error || 'Error'); });
  if (currentUser && currentUser.key === editKey) applyUserSectionLocks();
  cancelUserEdit();
  _refreshUsers(() => { renderUserTable(); showToast('✓', `${name} updated`); });
  }).catch(err => showToast('⚠', err.message || 'Failed to update', true));
}

function cancelUserEdit() {
  _adEditKey = null;
  document.getElementById('ad-edit-user-box').style.display = 'none';
}

/* =======================================
REAL-TIME SYNC — Socket.IO (LAN multi-user)
======================================= */
const _socket = io({ transports: ['websocket', 'polling'] });

_socket.on('data_changed', function(data) {
  loadOrders().then(() => {
    const dbView = document.getElementById('main-view-db');
    const dashView = document.getElementById('main-view-dashboard');
    if (dbView && dbView.style.display !== 'none') renderDB();
    if (dashView && dashView.style.display !== 'none') renderDashboard();
  });
  showToast('🔄', 'Data updated by another user');
});

_socket.on('users_changed', function() {
  _refreshUsers(() => applyUserSectionLocks());
});

_socket.on('customers_changed', function() {
  loadCustomerNames();
});

_socket.on('connect_error', function() {
  /* Silent — app still works, just no live push */
});

function applyUserSectionLocks() {
  if (!currentUser) return;
  if (currentUser.isAdmin) {
  ALL_SECTIONS.forEach(s => setFieldLocked(s, false));
  return;
  }
  const allowed = (USERS[currentUser.key]?.sections) || [];
  ALL_SECTIONS.forEach(s => setFieldLocked(s, !allowed.includes(s.id)));
}

function setFieldLocked(field, locked) {
  // Lock individual form element
  if (field.elId) {
  const el = document.getElementById(field.elId);
  if (el) {
  el.disabled = locked;
  const fieldDiv = el.closest('.field');
  if (fieldDiv) {
  fieldDiv.style.opacity  = locked ? '0.35' : '';
  fieldDiv.style.pointerEvents = locked ? 'none' : '';
  fieldDiv.title  = locked ? '🔒 Not assigned to you' : '';
  }
  }
  }
  // Lock a process card or section card
  if (field.cardId) {
  const card = document.getElementById(field.cardId);
  if (!card) return;
  if (locked) {
  card.style.opacity  = '0.35';
  card.style.pointerEvents = 'none';
  card.style.userSelect  = 'none';
  card.title  = '🔒 Not assigned to you';
  if (!card.querySelector('.section-lock-badge')) {
  const badge = document.createElement('div');
  badge.className = 'section-lock-badge';
  badge.innerHTML = '🔒';
  badge.style.cssText = 'position:absolute;top:4px;right:6px;z-index:10;font-size:11px;';
  card.style.position = 'relative';
  card.appendChild(badge);
  }
  } else {
  card.style.opacity  = '';
  card.style.pointerEvents = '';
  card.style.userSelect  = '';
  card.title  = '';
  const badge = card.querySelector('.section-lock-badge');
  if (badge) badge.remove();
  }
  }
}

/* =======================================
ADMIN DASHBOARD
======================================= */
function openAdminDash() {
  if (!currentUser?.isAdmin) return;
  loadOrders();
  loadCustomerNames();
  document.getElementById('admin-dash-overlay').style.display = 'block';
  const panel = document.getElementById('admin-dash-panel');
  panel.style.display = 'block';
  requestAnimationFrame(() => { panel.style.right = '0'; adSwitchTab(_activeAdminTab || 'users'); });
}

function closeAdminDash() {
  const panel = document.getElementById('admin-dash-panel');
  panel.style.right = '-100%';
  setTimeout(() => {
  panel.style.display = 'none';
  document.getElementById('admin-dash-overlay').style.display = 'none';
  }, 320);
}

/* =======================================
AUTH — Users & Admins
======================================= */
/* USERS is loaded from /api/app-users on init — passwords never reach the browser */
let USERS = {};

/* Build login dropdown from USERS */
function buildLoginDropdown() {
  const sel = document.getElementById('login-user');
  if (!sel) return;
  sel.innerHTML = '<option value="">— Select your name —</option>';
  const admins = Object.entries(USERS).filter(([,u]) => u.isAdmin);
  const users  = Object.entries(USERS).filter(([,u]) => !u.isAdmin);
  if (admins.length) {
  const ag = document.createElement('optgroup');
  ag.label = 'Administrators';
  admins.forEach(([k,u]) => { const o = document.createElement('option'); o.value=k; o.textContent=u.name; ag.appendChild(o); });
  sel.appendChild(ag);
  }
  if (users.length) {
  const ug = document.createElement('optgroup');
  ug.label = 'Users';
  users.forEach(([k,u]) => { const o = document.createElement('option'); o.value=k; o.textContent=u.name; ug.appendChild(o); });
  sel.appendChild(ug);
  }
}

/* Re-fetch user list from backend, rebuild dropdown, run optional callback */
function _refreshUsers(then) {
  fetch('/api/app-users')
  .then(r => r.json())
  .then(list => {
  USERS = {};
  list.forEach(u => { USERS[u.key] = u; });
  buildLoginDropdown();
  if (then) then();
  })
  .catch(() => { if (then) then(); });
}

let currentUser = null;

function doLogin() {
  const key  = document.getElementById('login-user').value;
  const pass = document.getElementById('login-pass').value;
  const err  = document.getElementById('login-err');
  if (!key || !pass) { err.classList.add('show'); return; }
  fetch('/api/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: key, password: pass })
  })
  .then(r => { if (!r.ok) throw new Error('bad'); return r.json(); })
  .then(user => {
  err.classList.remove('show');
  currentUser = user;
  document.getElementById('user-avatar').textContent  = user.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  document.getElementById('user-name-lbl').textContent = user.name;
  document.getElementById('user-role-lbl').textContent = user.role;
  const adminBtn = document.getElementById('btn-admin-dash');
  if (adminBtn) adminBtn.style.display = user.isAdmin ? 'flex' : 'none';
  const importBtn = document.getElementById('btn-import-customers');
  if (importBtn) importBtn.style.display = user.isAdmin ? 'flex' : 'none';
  const overlay = document.getElementById('login-overlay');
  overlay.style.opacity = '0';
  overlay.style.transition = 'opacity .3s';
  setTimeout(() => overlay.style.display = 'none', 300);
  loadOrders();
  loadCustomerNames();
  _refreshUsers(() => setTimeout(applyUserSectionLocks, 50));
  })
  .catch(() => {
  err.classList.add('show');
  document.getElementById('login-pass').value = '';
  document.getElementById('login-pass').focus();
  });
}

function doLogout() {
  if (!confirm('Sign out?')) return;
  fetch('/api/logout', { method: 'POST' }).catch(() => {});
  currentUser = null;
  customerRecords = [];
  customerNames = [];
  renderCustomerDatalist();
  renderCustomerAdminTable();
  const adminBtn = document.getElementById('btn-admin-dash');
  if (adminBtn) adminBtn.style.display = 'none';
  const importBtn = document.getElementById('btn-import-customers');
  if (importBtn) importBtn.style.display = 'none';
  closeAdminDash();
  document.getElementById('login-user').value = '';
  document.getElementById('login-pass').value = '';
  document.getElementById('login-err').classList.remove('show');
  const overlay = document.getElementById('login-overlay');
  overlay.style.transition = 'none';
  overlay.style.opacity  = '1';
  overlay.style.display  = 'flex';
}

// Restore session on reload — checks server-side session cookie
function _restoreSession() {
  const overlay = document.getElementById('login-overlay');
  if (!overlay) return;
  const usersP = fetch('/api/login-users')
  .then(r => r.json())
  .then(list => { USERS = {}; list.forEach(u => { USERS[u.key] = u; }); buildLoginDropdown(); })
  .catch(() => {});
  const sessP = fetch('/api/session')
  .then(r => r.ok ? r.json() : null)
  .catch(() => null);
  Promise.all([usersP, sessP]).then(([, saved]) => {
  if (saved) {
  currentUser = saved;
  const av = document.getElementById('user-avatar');
  if (av) av.textContent = saved.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
  const nl = document.getElementById('user-name-lbl');
  if (nl) nl.textContent = saved.name;
  const rl = document.getElementById('user-role-lbl');
  if (rl) rl.textContent = saved.role;
  overlay.style.display = 'none';
  const adminBtn2 = document.getElementById('btn-admin-dash');
  if (adminBtn2) adminBtn2.style.display = saved.isAdmin ? 'flex' : 'none';
  const importBtn2 = document.getElementById('btn-import-customers');
  if (importBtn2) importBtn2.style.display = saved.isAdmin ? 'flex' : 'none';
  loadOrders();
  loadCustomerNames();
  _refreshUsers(() => setTimeout(applyUserSectionLocks, 50));
  } else {
  customerRecords = [];
  customerNames = [];
  renderCustomerDatalist();
  renderCustomerAdminTable();
  overlay.style.display = 'flex';
  }
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _restoreSession);
} else {
  _restoreSession();
}

document.getElementById('customer-import-input')?.addEventListener('change', importCustomerNames);

/* ── Block right-click context menu (applies to WebView / minimal browser window) ── */
document.addEventListener('contextmenu', function (event) {
  /* Allow right-click inside editable inputs so copy/paste still works */
  const allow = event.target.closest('input, textarea, [contenteditable="true"]');
  if (!allow) event.preventDefault();
});

/* ═══════════════════════════════════════════════
   WORK ORDER DATABASE TAB
═══════════════════════════════════════════════ */
let _dbSortKey = 'savedAt';
let _dbSortAsc = false;
let _dbPage = 1;
const DB_PAGE_SIZE = 50;

function switchMainTab(tab) {
  const views = ['entry', 'db', 'dashboard'];
  views.forEach(v => {
    const view = document.getElementById('main-view-' + v);
    const btn  = document.getElementById('main-tab-' + v);
    if (view) view.style.display = v === tab ? '' : 'none';
    if (btn) {
      btn.style.color       = v === tab ? 'var(--accent)' : 'var(--muted)';
      btn.style.borderBottom= v === tab ? '2.5px solid var(--accent)' : '2.5px solid transparent';
    }
  });
  if (tab === 'db') loadOrders().then(() => renderDB());
  if (tab === 'dashboard') loadOrders().then(() => renderDashboard());
}

function dbSort(key) {
  if (_dbSortKey === key) _dbSortAsc = !_dbSortAsc;
  else { _dbSortKey = key; _dbSortAsc = false; }
  _dbPage = 1;
  renderDB();
}

function clearDBFilters() {
  ['db-search'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('db-filter-div').value = '';
  document.getElementById('db-filter-priority').value = '';
  _dbPage = 1;
  renderDB();
}

function renderDB() {
  const q       = (document.getElementById('db-search')?.value || '').trim().toLowerCase();
  const divF    = document.getElementById('db-filter-div')?.value || '';
  const priF    = document.getElementById('db-filter-priority')?.value || '';

  let rows = allOrders.filter(r => {
    if (q && !(r.id||'').toLowerCase().includes(q) && !(r.customer||'').toLowerCase().includes(q)) return false;
    if (divF && r.division !== divF) return false;
    if (priF && r.priority !== priF) return false;
    return true;
  });

  // Sort
  rows.sort((a, b) => {
    let va = a[_dbSortKey] || '', vb = b[_dbSortKey] || '';
    if (_dbSortKey === 'savedAt') { va = new Date(va); vb = new Date(vb); }
    const r = va < vb ? -1 : va > vb ? 1 : 0;
    return _dbSortAsc ? r : -r;
  });

  const tbody = document.getElementById('db-tbody');
  const empty = document.getElementById('db-empty');

  // Pagination
  const totalRows = rows.length;
  const totalPages = Math.max(1, Math.ceil(totalRows / DB_PAGE_SIZE));
  _dbPage = Math.max(1, Math.min(_dbPage, totalPages));
  const startIdx = (_dbPage - 1) * DB_PAGE_SIZE;
  const pageRows = rows.slice(startIdx, startIdx + DB_PAGE_SIZE);
  document.getElementById('db-count-label').textContent = `${totalRows} record${totalRows !== 1 ? 's' : ''}` + (totalPages > 1 ? ` · page ${_dbPage}/${totalPages}` : '');

  if (!totalRows) {
    tbody.innerHTML = '';
    empty.style.display = '';
    return;
  }
  empty.style.display = 'none';

  const priColor = { CRITICAL:'#ef4444', HIGH:'#f59e0b', MED:'#3b82f6', LOW:'#10b981' };
  const priBg    = { CRITICAL:'rgba(239,68,68,.1)', HIGH:'rgba(245,158,11,.1)', MED:'rgba(59,130,246,.1)', LOW:'rgba(16,185,129,.1)' };

  tbody.innerHTML = pageRows.map((r, i) => {
    const prog = parseInt(r.progress) || 0;
    const progColor = prog >= 80 ? 'var(--success)' : prog >= 40 ? 'var(--warn)' : 'var(--danger)';
    const savedFmt = r.savedAt ? new Date(r.savedAt).toLocaleString('en-IN',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '—';
    const divShort = (r.division||'').replace('SARAS - ','');
    const pri = r.priority || '';
    const sId = escapeHtml(r.id);
    const sCust = escapeHtml(r.customer);
    const sDiv = escapeHtml(divShort);
    const sPri = escapeHtml(pri);
    const sDel = escapeHtml(r.deliveryDate);
    const sProg = escapeHtml(r.progress);
    return `<tr style="border-bottom:1px solid var(--border);transition:background .1s;" onmouseover="this.style.background='#f5f8ff'" onmouseout="this.style.background=''">
      <td style="padding:10px 14px;font-family:var(--font-mn);font-size:11px;color:var(--muted);">${startIdx+i+1}</td>
      <td style="padding:10px 14px;font-family:var(--font-mn);font-size:12px;font-weight:700;color:var(--accent);">${sId||'—'}</td>
      <td style="padding:10px 14px;font-size:12px;color:var(--text);">${sCust||'—'}</td>
      <td style="padding:10px 14px;font-family:var(--font-mn);font-size:11px;color:var(--text-2);">${sDiv||'—'}</td>
      <td style="padding:10px 14px;">
        ${pri ? `<span style="font-family:var(--font-mn);font-size:10px;font-weight:700;padding:3px 8px;border-radius:10px;background:${priBg[pri]||'rgba(100,116,139,.1)'};color:${priColor[pri]||'var(--muted)'};">${sPri}</span>` : '—'}
      </td>
      <td style="padding:10px 14px;font-family:var(--font-mn);font-size:11px;color:var(--text-2);">${sDel||'—'}</td>
      <td style="padding:10px 14px;">
        ${(() => {
          const m = (r.deliveryDate||'').match(/(\d{2})\/(\d{2})\/(\d{4})/);
          if (!m) return '<span style="color:var(--muted);font-family:var(--font-mn);font-size:11px;">—</span>';
          const diff = Math.ceil((new Date(+m[3],+m[2]-1,+m[1]) - new Date().setHours(0,0,0,0)) / 86400000);
          const col  = diff < 0 ? '#ef4444' : diff <= 7 ? '#f59e0b' : diff <= 14 ? '#3b82f6' : '#10b981';
          const bg   = diff < 0 ? 'rgba(239,68,68,.1)' : diff <= 7 ? 'rgba(245,158,11,.1)' : diff <= 14 ? 'rgba(59,130,246,.1)' : 'rgba(16,185,129,.1)';
          const lbl  = diff < 0 ? `${Math.abs(diff)}d overdue` : diff === 0 ? 'Due today' : `${diff}d left`;
          return `<span style="font-family:var(--font-mn);font-size:10px;font-weight:700;padding:3px 9px;border-radius:10px;background:${bg};color:${col};white-space:nowrap;">${lbl}</span>`;
        })()}
      </td>
      <td style="padding:10px 14px;">
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="flex:1;background:#e2e8f0;border-radius:4px;height:6px;min-width:60px;">
            <div style="width:${prog}%;background:${progColor};height:6px;border-radius:4px;transition:width .3s;"></div>
          </div>
          <span style="font-family:var(--font-mn);font-size:10px;font-weight:700;color:${progColor};min-width:30px;">${sProg||'0%'}</span>
        </div>
      </td>
      <td style="padding:10px 14px;font-family:var(--font-mn);font-size:10px;color:var(--muted);">${savedFmt}</td>
      <td style="padding:10px 14px;text-align:center;">
        <div style="display:flex;gap:6px;justify-content:center;">
          <button onclick="dbViewRecord('${sId}')" style="background:rgba(16,185,129,.1);color:#059669;border:1px solid rgba(16,185,129,.25);border-radius:4px;padding:5px 10px;font-family:var(--font-mn);font-size:10px;cursor:pointer;font-weight:700;">👁 View</button>
          <button onclick="dbEditRecord('${sId}')" style="background:rgba(37,99,235,.1);color:var(--accent);border:1px solid rgba(37,99,235,.2);border-radius:4px;padding:5px 10px;font-family:var(--font-mn);font-size:10px;cursor:pointer;font-weight:700;">✎ Edit</button>
          ${currentUser?.isAdmin ? `<button onclick="dbDeleteRecord('${sId}')" style="background:rgba(239,68,68,.08);color:#ef4444;border:1px solid rgba(239,68,68,.2);border-radius:4px;padding:5px 10px;font-family:var(--font-mn);font-size:10px;cursor:pointer;font-weight:700;">✕ Delete</button>` : ''}
        </div>
      </td>
    </tr>`;
  }).join('');

  // Pagination controls
  let pgEl = document.getElementById('db-pagination');
  if (!pgEl) {
    pgEl = document.createElement('div');
    pgEl.id = 'db-pagination';
    pgEl.style.cssText = 'display:flex;justify-content:center;align-items:center;gap:14px;padding:14px 0;font-family:var(--font-mn);font-size:12px;color:var(--muted);';
    const tableWrap = tbody.closest('table')?.parentElement;
    if (tableWrap) tableWrap.appendChild(pgEl);
  }
  if (totalPages > 1) {
    const btnStyle = 'background:var(--surface);border:1px solid var(--border);border-radius:4px;padding:5px 14px;cursor:pointer;font-family:var(--font-mn);font-size:11px;font-weight:700;color:var(--accent);';
    pgEl.innerHTML = `<button onclick="dbPageChange(-1)" ${_dbPage<=1?'disabled style="opacity:.4;cursor:default;'+btnStyle+'"':'style="'+btnStyle+'"'}>◀ Prev</button><span>Page ${_dbPage} of ${totalPages}</span><button onclick="dbPageChange(1)" ${_dbPage>=totalPages?'disabled style="opacity:.4;cursor:default;'+btnStyle+'"':'style="'+btnStyle+'"'}>Next ▶</button>`;
    pgEl.style.display = 'flex';
  } else if (pgEl) {
    pgEl.style.display = 'none';
  }
}

function dbPageChange(delta) {
  _dbPage += delta;
  renderDB();
}

function dbEditRecord(id) {
  loadWOIntoForm(id);
  switchMainTab('entry');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast('✎', `W/O "${id}" loaded for editing`);
}

function dbDeleteRecord(id) {
  if (!currentUser?.isAdmin) { showToast('⚠', 'Only administrators can delete work orders', true); return; }
  if (!confirm(`Delete Work Order "${id}"? This cannot be undone.`)) return;
  fetch('/api/orders/' + encodeURIComponent(id), { method: 'DELETE' })
    .then(r => r.json().then(j => ({ ok: r.ok, body: j })))
    .then(({ ok, body }) => {
      if (!ok) throw new Error(body.error || 'Delete failed');
      showToast('🗑', `W/O "${id}" deleted`);
      loadOrders().then(() => renderDB());
    })
    .catch(e => showToast('⚠', e.message, true));
}

/* ═══════════════════════════════════════════════
   DASHBOARD
═══════════════════════════════════════════════ */
let _dashChart = null;

function renderDashboard() {
  const monthsBack = parseInt(document.getElementById('dash-chart-range')?.value || 12);
  const now    = new Date();
  const labels = [];
  const monthKeys = [];
  for (let i = monthsBack - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    const lbl = d.toLocaleString('en-IN', { month: 'short', year: '2-digit' });
    labels.push(lbl);
    monthKeys.push(key);
  }

  const entryCounts    = Object.fromEntries(monthKeys.map(k => [k, 0]));
  const dispatchCounts = Object.fromEntries(monthKeys.map(k => [k, 0]));

  const toKey = dateStr => {
    const m = (dateStr||'').match(/(\d{2})\/(\d{2})\/(\d{4})/);
    return m ? `${m[3]}-${m[2]}` : null;
  };

  allOrders.forEach(r => {
    const ek = toKey(r.poEntryDate);
    if (ek && entryCounts[ek] !== undefined) entryCounts[ek]++;
    const dispProc = (r.edgeProcesses||[]).find(p => p.id === 'dispatch');
    const dispDate = dispProc?.start || dispProc?.end || '';
    const dk = toKey(dispDate);
    if (dk && dispatchCounts[dk] !== undefined) dispatchCounts[dk]++;
  });

  const entryData    = monthKeys.map(k => entryCounts[k]);
  const dispatchData = monthKeys.map(k => dispatchCounts[k]);

  const canvas = document.getElementById('dash-line-chart');
  if (!canvas) return;

  if (_dashChart) {
    _dashChart.data.labels = labels;
    _dashChart.data.datasets[0].data = entryData;
    _dashChart.data.datasets[1].data = dispatchData;
    _dashChart.update();
    return;
  }

  _dashChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Order Entry',
          data: entryData,
          borderColor: '#2563eb',
          backgroundColor: 'rgba(37,99,235,.08)',
          borderWidth: 2.5,
          pointBackgroundColor: '#2563eb',
          pointRadius: 5,
          pointHoverRadius: 7,
          fill: true,
          tension: 0.4,
        },
        {
          label: 'Dispatch',
          data: dispatchData,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16,185,129,.08)',
          borderWidth: 2.5,
          pointBackgroundColor: '#10b981',
          pointRadius: 5,
          pointHoverRadius: 7,
          fill: true,
          tension: 0.4,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0f172a',
          titleFont: { family: 'JetBrains Mono', size: 11 },
          bodyFont:  { family: 'JetBrains Mono', size: 12 },
          padding: 12,
          callbacks: {
            label: ctx => `  ${ctx.dataset.label}: ${ctx.parsed.y} orders`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,0,0,.04)' },
          ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#64748b' }
        },
        y: {
          beginAtZero: true,
          ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#64748b', stepSize: 1, precision: 0 },
          grid: { color: 'rgba(0,0,0,.04)' }
        }
      }
    }
  });
}



function closeWOView() {
  const panel   = document.getElementById('wo-view-panel');
  const overlay = document.getElementById('wo-view-overlay');
  panel.style.right = '-100%';
  setTimeout(() => { panel.style.display = 'none'; overlay.style.display = 'none'; }, 310);
}

function dbViewRecord(id) {
  const r = allOrders.find(o => o.id === id);
  if (!r) return;

  document.getElementById('wov-wo-id').textContent = r.id;

  const priColor = { CRITICAL:'#ef4444', HIGH:'#f59e0b', MED:'#3b82f6', LOW:'#10b981' };
  const priBg    = { CRITICAL:'rgba(239,68,68,.1)', HIGH:'rgba(245,158,11,.1)', MED:'rgba(59,130,246,.1)', LOW:'rgba(16,185,129,.1)' };
  const prog     = parseInt(r.progress) || 0;
  const progColor= prog >= 80 ? 'var(--success)' : prog >= 40 ? 'var(--warn)' : 'var(--danger)';
  const savedFmt = r.savedAt ? new Date(r.savedAt).toLocaleString('en-IN',{day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '—';

  // Helper to render a section card
  const card = (icon, title, color, rows) => `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r);box-shadow:var(--shadow-card);margin-bottom:16px;overflow:hidden;">
      <div style="background:${color};padding:11px 18px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:14px;">${icon}</span>
        <span style="font-family:var(--font-hd);font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;">${title}</span>
      </div>
      <div style="padding:16px 18px;">
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;">
          ${rows.map(([label, val]) => `
            <div>
              <div style="font-family:var(--font-mn);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:4px;">${escapeHtml(label)}</div>
              <div style="font-family:var(--font-mn);font-size:12px;color:var(--text);font-weight:600;">${escapeHtml(val) || '<span style="color:var(--muted);font-weight:400;">—</span>'}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>`;

  // Process table helper
  const procTable = (title, icon, color, procs) => {
    if (!procs || !procs.length) return '';
    return `
    <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--r);box-shadow:var(--shadow-card);margin-bottom:16px;overflow:hidden;">
      <div style="background:${color};padding:11px 18px;display:flex;align-items:center;gap:10px;">
        <span style="font-size:14px;">${icon}</span>
        <span style="font-family:var(--font-hd);font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;">${title}</span>
      </div>
      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;min-width:500px;">
          <thead><tr style="background:#f1f5fb;border-bottom:1.5px solid var(--border);">
            <th style="font-family:var(--font-mn);font-size:9px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);padding:9px 14px;text-align:left;">Process</th>
            <th style="font-family:var(--font-mn);font-size:9px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);padding:9px 14px;text-align:left;">Req Qty</th>
            <th style="font-family:var(--font-mn);font-size:9px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);padding:9px 14px;text-align:left;">Planned Date</th>
            <th style="font-family:var(--font-mn);font-size:9px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);padding:9px 14px;text-align:left;">Start Date</th>
            <th style="font-family:var(--font-mn);font-size:9px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);padding:9px 14px;text-align:left;">End Date</th>
            <th style="font-family:var(--font-mn);font-size:9px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--muted);padding:9px 14px;text-align:left;">Status</th>
          </tr></thead>
          <tbody>
            ${procs.map(p => {
              const hasData = p.req || p.planned || p.start || p.end;
              const done = p.start && p.end;
              const inProg = p.start && !p.end;
              const statusColor = done ? '#10b981' : inProg ? '#f59e0b' : '#94a3b8';
              const statusBg = done ? 'rgba(16,185,129,.1)' : inProg ? 'rgba(245,158,11,.1)' : 'rgba(148,163,184,.08)';
              const statusLabel = done ? '✓ Done' : inProg ? '⟳ In Progress' : hasData ? '○ Pending' : '— N/A';
              return `<tr style="border-bottom:1px solid var(--border);">
                <td style="padding:9px 14px;font-size:12px;color:var(--text);">${escapeHtml(p.label||p.id)}</td>
                <td style="padding:9px 14px;font-family:var(--font-mn);font-size:11px;color:var(--text-2);">${escapeHtml(p.req)||'—'}</td>
                <td style="padding:9px 14px;font-family:var(--font-mn);font-size:11px;color:var(--text-2);">${escapeHtml(p.planned)||'—'}</td>
                <td style="padding:9px 14px;font-family:var(--font-mn);font-size:11px;color:var(--text-2);">${escapeHtml(p.start)||'—'}</td>
                <td style="padding:9px 14px;font-family:var(--font-mn);font-size:11px;color:var(--text-2);">${escapeHtml(p.end)||'—'}</td>
                <td style="padding:9px 14px;"><span style="font-family:var(--font-mn);font-size:10px;font-weight:700;padding:3px 9px;border-radius:10px;background:${statusBg};color:${statusColor};">${statusLabel}</span></td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
  };

  // Build content
  const html = `
    <!-- Summary Banner -->
    <div style="background:linear-gradient(135deg,var(--info-dark),#1e3a6e);border-radius:var(--r);padding:20px 24px;margin-bottom:20px;display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
      <div>
        <div style="font-family:var(--font-mn);font-size:10px;color:rgba(255,255,255,.5);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Work Order</div>
        <div style="font-family:var(--font-hd);font-size:22px;font-weight:900;color:#fff;letter-spacing:2px;">${r.id}</div>
      </div>
      <div style="flex:1;min-width:160px;">
        <div style="font-family:var(--font-mn);font-size:10px;color:rgba(255,255,255,.5);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Customer</div>
        <div style="font-size:16px;font-weight:600;color:#fff;">${r.customer||'—'}</div>
      </div>
      <div>
        <div style="font-family:var(--font-mn);font-size:10px;color:rgba(255,255,255,.5);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;">Progress</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:120px;background:rgba(255,255,255,.15);border-radius:4px;height:8px;">
            <div style="width:${prog}%;background:${progColor};height:8px;border-radius:4px;"></div>
          </div>
          <span style="font-family:var(--font-hd);font-size:16px;font-weight:700;color:${progColor};">${r.progress||'0%'}</span>
        </div>
      </div>
      ${r.priority ? `<div><span style="font-family:var(--font-mn);font-size:11px;font-weight:700;padding:5px 14px;border-radius:12px;background:${priBg[r.priority]||'rgba(100,116,139,.2)'};color:${priColor[r.priority]||'#94a3b8'};">${r.priority}</span></div>` : ''}
      <div style="text-align:right;">
        <div style="font-family:var(--font-mn);font-size:9px;color:rgba(255,255,255,.4);letter-spacing:1px;text-transform:uppercase;">Last Saved</div>
        <div style="font-family:var(--font-mn);font-size:11px;color:rgba(255,255,255,.7);">${savedFmt}</div>
      </div>
    </div>

    ${card('⬡', 'Order Information', '#1a3a8f', [
      ['W/O #', r.id],
      ['W/O Created Date', r.poEntryDate],
      ['Customer', r.customer],
      ['Division', r.division],
      ['Priority', r.priority],
      ['Coating', r.coating],
      ['Electrode', r.electrode],
      ['Design', r.design],
      ['Order Qty', r.orderQty],
      ['Order Value', r.orderValue],
      ['Store Blanks (AQTY)', r.storeAQTY],
      ['Bin Number', r.binNumber],
      ['Trail', r.trail],
      ['PO Advance', r.poAdvance],
      ['PO Date/Time', r.poDateTime],
    ])}

    ${card('📦', 'Delivery Schedule', '#065f46', [
      ['W/O Issue Date', r.woIssueDate],
      ['No. of Weeks', r.weeks],
      ['Delivery Date', r.deliveryDate],
    ])}

    ${card('📥', 'Store Blanks — Shortage', '#7c3aed', [
      ['Shortage Status', r.rcvdShortageStatus],
      ['Shortage Date', r.rcvdShortageDate],
      ['Shortage Qty', r.rcvdShortageQty],
      ['Shortage', r.shortage],
    ])}

    ${card('📦', 'SF Bin / BSF', '#b45309', [
      ['SF Bin Status', r.sfBinStatus],
      ['SF Received Date', r.sfRecDate],
      ['SF Received Qty', r.sfRecQty],
      ['BSF Qty', r.bsfQty],
      ['BSF Status', r.bsfStatus],
      ['BSF Received Date', r.bsfRecDate],
    ])}

    ${procTable('Core Team Processes', '⚙', '#1a3a8f', r.coreProcesses)}
    ${procTable('Core Team — Custom Design', '✦', '#374151', r.customDesignDates)}
    ${procTable('Edge Team Processes', '◈', '#065f46', r.edgeProcesses)}
  `;

  document.getElementById('wo-view-content').innerHTML = html;

  const overlay = document.getElementById('wo-view-overlay');
  const panel   = document.getElementById('wo-view-panel');
  overlay.style.display = 'block';
  panel.style.display   = 'block';
  requestAnimationFrame(() => { panel.style.right = '0'; });
}
