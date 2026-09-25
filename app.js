/**
 * MAPA CONCEPTUAL DE CORRELATIVAS (MODO CLARO)
 * Ingeniería en Computación · UNLP (Plan 2011)
 * Application Logic & Full-Path Transitive Tracing
 */

document.addEventListener('DOMContentLoaded', () => {
  // Available Study Plans
  const PLANS = {
    '2011': window.PLAN_2011_DATA || window.ACADEMIC_DATA,
    '2024': window.PLAN_2024_DATA
  };

  // Bidirectional Equivalence Dictionary (Plan 2011 <-> Plan 2024)
  // Ensures matching subjects preserve and share academic status and grades seamlessly
  const PLAN_EQUIVALENCES = {
    // Ingreso / Nivelación
    'MATE-PI': 'D1001',
    'D1001': 'MATE-PI',
    'IAI': 'I1001',
    'I1001': 'IAI',

    // 1º Año
    'F0301': 'F1301',
    'F1301': 'F0301',
    'I101': 'I1101',
    'I1101': 'I101',
    'F0302': 'F1302',
    'F1302': 'F0302',
    'I102': 'I1102',
    'I1102': 'I102',
    'F0316': 'F1303',
    'F1303': 'F0316',

    // 2º Año
    'F0304': 'F1304',
    'F1304': 'F0304',
    'I103': 'I1103',
    'I1103': 'I103',
    'I105': 'I1105',
    'I1105': 'I105',
    'I104': 'I1104',
    'I1104': 'I104',
    'F0310': 'F1306',
    'F1306': 'F0310',
    'F0317': 'F1305',
    'F1305': 'F0317',
    'I106': 'I1106',
    'I1106': 'I106',
    'I107': 'I1107',
    'I1107': 'I107',

    // 3º Año
    'F0312': 'F1315',
    'F1315': 'F0312',
    'E0282': 'E1282',
    'E1282': 'E0282',
    'I108': 'I1108',
    'I1108': 'I108',
    'E0301': 'E1301',
    'E1301': 'E0301',
    'E0302': 'E1302',
    'E1302': 'E0302',
    'I109': 'I1109',
    'I1109': 'I109',
    'I110': 'I1110',
    'I1110': 'I110',
    'E0303': 'E1303',
    'E1303': 'E0303',

    // 4º Año
    'I111': 'I1111',
    'I1111': 'I111',
    'E0304': 'E1304',
    'E1304': 'E0304',
    'E0305': 'E1305',
    'E1305': 'E0305',
    'I113': 'I1113',
    'I1113': 'I113',
    'I114': 'I1114',
    'I1114': 'I114',
    'I115': 'I1115',
    'I115': 'I1115',
    'E0306': 'E1306',
    'E1306': 'E0306',
    'I112': 'I1112',
    'I1112': 'I112',

    // 5º Año
    'I116': 'I1116',
    'I1116': 'I116',
    'I117': 'I1117',
    'I1117': 'I117',
    'I118': 'I1118',
    'I1118': 'I118',
    'S0012': 'HUM',
    'HUM': 'S0012',

    // PPS
    'E0228': 'EI100',
    'EI100': 'E0228',
    'INFIN': 'INFIN'
  };

  const storedPlan = localStorage.getItem('unlp_active_plan');
  let currentPlan = (storedPlan === '2024') ? '2024' : '2011';
  let data = PLANS[currentPlan] || window.PLAN_2011_DATA || window.ACADEMIC_DATA;
  if (!data || !data.materias) {
    console.error('No academic data loaded!');
    return;
  }

  // DOM Elements
  const matrixContainer = document.getElementById('matrixContainer');
  const connectionsSvg = document.getElementById('connectionsSvg');
  const mapViewport = document.getElementById('mapViewport');
  const graphCanvas = document.getElementById('graphCanvas');
  const leftEdgeTrigger = document.getElementById('leftEdgeTrigger');
  const btnTogglePlan = document.getElementById('btnTogglePlan');
  const planBadgeText = document.getElementById('planBadgeText');
  
  // HUD Elements
  const hudGpa = document.getElementById('hudGpa');
  const hudAvance = document.getElementById('hudAvance');
  const hudMateriasRatio = document.getElementById('hudMateriasRatio');
  const hudAprobadas = document.getElementById('hudAprobadas');
  const hudEnCurso = document.getElementById('hudEnCurso');
  const hudPendientes = document.getElementById('hudPendientes');

  // Drawer Elements
  const materialDrawer = document.getElementById('materialDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerCode = document.getElementById('drawerCode');
  const drawerTitle = document.getElementById('drawerTitle');
  const drawerYearSem = document.getElementById('drawerYearSem');
  const drawerHours = document.getElementById('drawerHours');
  const drawerStatusSubtitle = document.getElementById('drawerStatusSubtitle');
  const drawerOfficialLinks = document.getElementById('drawerOfficialLinks');
  const drawerStatusSelect = document.getElementById('drawerStatusSelect');
  const drawerGradeEditor = document.getElementById('drawerGradeEditor');
  const drawerGradeInput = document.getElementById('drawerGradeInput');
  const drawerSavedIndicator = document.getElementById('drawerSavedIndicator');
  const drawerCategoryTabs = document.getElementById('drawerCategoryTabs');
  const drawerSearchInput = document.getElementById('drawerSearchInput');
  const drawerMaterialsList = document.getElementById('drawerMaterialsList');
  const toastNotice = document.getElementById('toastNotice');

  // Mobile Action Pill Elements (Floating bottom bar on touch selection)
  const mobileActionPill = document.getElementById('mobileActionPill');
  const mobilePillCode = document.getElementById('mobilePillCode');
  const mobilePillName = document.getElementById('mobilePillName');
  const mobilePillBtn = document.getElementById('mobilePillBtn');
  const mobilePillClose = document.getElementById('mobilePillClose');
  let mobileActiveCode = null;
  let mobileEffectiveDrawerCode = null;

  // Optativas Modal Elements
  const btnDrawerChangeOptativa = document.getElementById('btnDrawerChangeOptativa');
  const optativasModal = document.getElementById('optativasModal');
  const optativasModalCloseBtn = document.getElementById('optativasModalCloseBtn');
  const optativasModalSlotMeta = document.getElementById('optativasModalSlotMeta');
  const optativasModalTitle = document.getElementById('optativasModalTitle');
  const optativasModalSubtitle = document.getElementById('optativasModalSubtitle');
  const optativasSearchInput = document.getElementById('optativasSearchInput');
  const optativasFilterChips = document.getElementById('optativasFilterChips');
  const optativasListContainer = document.getElementById('optativasListContainer');
  const btnClearOptativa = document.getElementById('btnClearOptativa');

  // Optativas Selection Persistence
  const OPTATIVAS_STORAGE_KEY = 'unlp_selected_optativas';

  function getSelectedOptativas() {
    try {
      const raw = localStorage.getItem(OPTATIVAS_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      if (!parsed['2011']) parsed['2011'] = {};
      if (!parsed['2024']) parsed['2024'] = {};
      return parsed;
    } catch (e) {
      return { '2011': {}, '2024': {} };
    }
  }

  function saveSelectedOptativas(selections) {
    try {
      localStorage.setItem(OPTATIVAS_STORAGE_KEY, JSON.stringify(selections));
    } catch (e) {}
  }

  function findOptativaInCatalog(code, plan) {
    if (!window.OPTATIVAS_CATALOG || !code) return null;
    return window.OPTATIVAS_CATALOG.find(item => {
      return item.code_2011 === code || item.code_2024 === code;
    }) || null;
  }

  function getOptativaActiveCode(optativa, plan) {
    if (!optativa) return '';
    return (plan === '2024' ? optativa.code_2024 : optativa.code_2011) || optativa.code_2011 || optativa.code_2024;
  }

  // Build Code Map
  const subjectMap = new Map();
  function rebuildSubjectMap() {
    subjectMap.clear();
    data.materias.forEach(m => {
      if (m.code) subjectMap.set(m.code, m);
    });
  }
  rebuildSubjectMap();

  // =========================================================================
  // PERSISTENCIA LOCALSTORAGE & GESTIÓN DE CONDICIÓN ACADÉMICA
  // =========================================================================
  const STORAGE_KEY = 'unlp_academic_status_overrides';

  function getStoredOverrides() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error('Error al leer de localStorage:', e);
      return {};
    }
  }

  function saveStoredOverrides(overrides) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides));
    } catch (e) {
      console.error('Error al guardar en localStorage:', e);
    }
  }

  function applyStoredOverrides() {
    const overrides = getStoredOverrides();
    data.materias.forEach(m => {
      if (!m.code) return;

      if (m.is_optativa_slot) {
        const selections = getSelectedOptativas();
        const assignedCode = selections[currentPlan]?.[m.code];
        if (assignedCode) {
          const opt = findOptativaInCatalog(assignedCode, currentPlan);
          if (opt) {
            const activeOptCode = getOptativaActiveCode(opt, currentPlan);
            let o = overrides[activeOptCode];
            if (!o) {
              const otherCode = (opt.code_2011 === activeOptCode) ? opt.code_2024 : opt.code_2011;
              if (otherCode) o = overrides[otherCode];
            }
            if (!o) o = overrides[m.code];
            if (o) {
              if (o.status !== undefined) m.status = o.status;
              if (o.grade !== undefined) m.grade = o.grade;
              if (o.has_failed !== undefined) m.has_failed = o.has_failed;
            }
          }
        }
        return;
      }

      // 1. Direct match by subject code in stored overrides
      let o = overrides[m.code];

      // 2. If not found, lookup equivalent code from other plan
      if (!o && PLAN_EQUIVALENCES[m.code]) {
        const equivCode = PLAN_EQUIVALENCES[m.code];
        o = overrides[equivCode];
      }

      // 3. Fallback for merged Probabilidades y Estadística (F1315)
      if (!o && m.code === 'F1315') {
        o = overrides['F0312'] || overrides['F0307'];
      }

      if (o) {
        if (o.status !== undefined) m.status = o.status;
        if (o.grade !== undefined) m.grade = o.grade;
        if (o.has_failed !== undefined) m.has_failed = o.has_failed;
      }
    });
    recalculateStats();
  }

  function persistSubjectOverride(m) {
    if (!m || !m.code) return;
    const overrides = getStoredOverrides();

    // 1. Save directly under this subject code
    overrides[m.code] = {
      status: m.status,
      grade: m.grade,
      has_failed: m.has_failed
    };

    // 2. Check if an equivalent exists in PLAN_EQUIVALENCES or OPTATIVAS_CATALOG
    let equivCode = PLAN_EQUIVALENCES[m.code];
    if (!equivCode && window.OPTATIVAS_CATALOG) {
      const opt = window.OPTATIVAS_CATALOG.find(item => item.code_2011 === m.code || item.code_2024 === m.code);
      if (opt) {
        equivCode = (opt.code_2011 === m.code) ? opt.code_2024 : opt.code_2011;
      }
    }

    if (equivCode && equivCode !== m.code) {
      overrides[equivCode] = {
        status: m.status,
        grade: m.grade,
        has_failed: m.has_failed
      };

      // Also sync other plan in-memory data if available
      const otherPlanKey = (currentPlan === '2011') ? '2024' : '2011';
      const otherPlan = PLANS[otherPlanKey];
      if (otherPlan && otherPlan.materias) {
        const otherM = otherPlan.materias.find(x => x.code === equivCode);
        if (otherM) {
          otherM.status = m.status;
          otherM.grade = m.grade;
          otherM.has_failed = m.has_failed;
        }
      }
    }

    saveStoredOverrides(overrides);
  }

  function updatePlanBadge() {
    if (planBadgeText) planBadgeText.textContent = `Plan ${currentPlan}`;
    if (btnTogglePlan) {
      btnTogglePlan.classList.toggle('is-2024', currentPlan === '2024');
      btnTogglePlan.setAttribute('title', `Plan activo: ${currentPlan}. Clic para cambiar a Plan ${currentPlan === '2011' ? '2024' : '2011'}`);
    }
    const btnSidePlan2011 = document.getElementById('btnSidePlan2011');
    const btnSidePlan2024 = document.getElementById('btnSidePlan2024');
    const sideBadge2011 = document.getElementById('sideBadge2011');
    const sideBadge2024 = document.getElementById('sideBadge2024');
    if (btnSidePlan2011 && btnSidePlan2024) {
      btnSidePlan2011.classList.toggle('is-active', currentPlan === '2011');
      btnSidePlan2024.classList.toggle('is-active', currentPlan === '2024');
      if (sideBadge2011) sideBadge2011.textContent = (currentPlan === '2011') ? 'Activo' : 'Vigente';
      if (sideBadge2024) sideBadge2024.textContent = (currentPlan === '2024') ? 'Activo' : 'Nuevo';
    }
  }

  function switchPlan(newPlan) {
    const targetPlan = newPlan || (currentPlan === '2011' ? '2024' : '2011');
    if (targetPlan === currentPlan) return;
    currentPlan = targetPlan;
    localStorage.setItem('unlp_active_plan', currentPlan);

    // Swap data reference
    data = PLANS[currentPlan] || window.PLAN_2011_DATA;

    // Update Header Badge
    updatePlanBadge();

    // Rebuild Subject Map for active plan
    rebuildSubjectMap();

    // Apply stored overrides for newly active plan
    applyStoredOverrides();

    // Clear active wires/traces
    clearFullChain();

    // Close drawer if open
    if (materialDrawer && materialDrawer.open) {
      materialDrawer.close();
    }

    // Render Matrix with the new plan's subjects & layout
    renderMatrix();

    // If state filter is active, reapply it
    if (activeStateFilter) {
      updateNodesFilterState(activeStateFilter);
    }

    showToast(`Cambiado a Plan ${currentPlan}`);
  }

  if (btnTogglePlan) {
    btnTogglePlan.addEventListener('click', () => switchPlan());
  }

  function recalculateStats() {
    let approved = 0;
    let inCourse = 0;
    let cursada = 0;
    let pending = 0;
    let failed = 0;
    let gradeSum = 0;
    let gradedCount = 0;
    let approvedHours = 0;

    let ingresoApproved = 0;
    let ingresoTotal = 0;

    data.materias.forEach(m => {
      if (m.sem_num === 0) {
        ingresoTotal++;
        if (m.status === 'aprobada') ingresoApproved++;
        return; // Don't count ingreso modules towards degree curricular requirements
      }

      // Check if this is an optativa slot with an assigned optativa
      if (m.is_optativa_slot) {
        const selections = getSelectedOptativas();
        const assignedCode = selections[currentPlan]?.[m.code];
        const optativa = assignedCode ? findOptativaInCatalog(assignedCode, currentPlan) : null;
        if (optativa) {
          const activeOptCode = getOptativaActiveCode(optativa, currentPlan);
          const overrides = getStoredOverrides();
          const optOverride = overrides[activeOptCode] || overrides[m.code] || {};
          const status = optOverride.status || 'pendiente';
          const grade = optOverride.grade;
          const failed = !!optOverride.has_failed;

          if (status === 'aprobada') {
            approved++;
            approvedHours += 96;
            if (typeof grade === 'number' && !isNaN(grade) && grade > 0) {
              gradeSum += grade;
              gradedCount++;
            }
          } else if (status === 'en_curso') {
            inCourse++;
          } else if (status === 'cursada_aprobada') {
            cursada++;
          } else {
            pending++;
          }
          if (failed) failed++;
          return;
        }
      }

      const hs = parseInt(m.hs_t, 10) || 0;
      if (m.status === 'aprobada') {
        approved++;
        approvedHours += hs;
        if (typeof m.grade === 'number' && !isNaN(m.grade) && m.grade > 0) {
          gradeSum += m.grade;
          gradedCount++;
        }
      } else if (m.status === 'en_curso') {
        inCourse++;
      } else if (m.status === 'cursada_aprobada') {
        cursada++;
      } else {
        pending++;
      }
      if (m.has_failed) failed++;
    });

    data.stats.aprobadas = approved;
    data.stats.cursada_aprobada = cursada;
    data.stats.en_curso = inCourse;
    data.stats.pendientes = pending;
    data.stats.reprobadas_previas = failed;
    data.stats.horas_aprobadas = approvedHours;
    if (gradedCount > 0) {
      data.promedio = Number((gradeSum / gradedCount).toFixed(2));
    } else {
      data.promedio = 0.0;
    }

    initHud();
  }

  function updateSubjectNodeInDOM(m) {
    const node = document.querySelector(`.subject-node[data-code="${m.code}"]`);
    if (!node) return;

    node.dataset.status = m.status || 'pendiente';
    node.dataset.failed = m.has_failed ? 'true' : 'false';

    // Update grade/status tag in node-top
    const nodeTop = node.querySelector('.node-top');
    if (nodeTop) {
      const existingTag = nodeTop.querySelector('.node-grade-tag');
      if (existingTag) existingTag.remove();

      let gradeTagHTML = '';
      if (m.status === 'aprobada' && m.grade !== null && m.grade !== undefined && !isNaN(m.grade)) {
        gradeTagHTML = `<span class="node-grade-tag grade-aprobada">${m.grade}</span>`;
      } else if (m.status === 'en_curso') {
        gradeTagHTML = `<span class="node-grade-tag grade-en-curso">EN CURSO</span>`;
      } else if (m.status === 'cursada_aprobada') {
        gradeTagHTML = `<span class="node-grade-tag grade-cursada">REG</span>`;
      }

      if (gradeTagHTML) {
        nodeTop.insertAdjacentHTML('beforeend', gradeTagHTML);
      }
    }

    // Update hover / expanded info
    const expanded = node.querySelector('.node-expanded-info');
    if (expanded) {
      expanded.innerHTML = `
        <div><strong>${m.year || ''}</strong> · ${m.semester || ''}</div>
        <div>${formatConditionText(m)}</div>
      `;
    }
  }

  let toastTimer = null;
  function showToast(msg) {
    if (!toastNotice) return;
    toastNotice.textContent = msg;
    toastNotice.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2400);
  }

  function flashSavedIndicator() {
    if (!drawerSavedIndicator) return;
    drawerSavedIndicator.classList.add('just-saved');
    setTimeout(() => {
      drawerSavedIndicator.classList.remove('just-saved');
    }, 500);
  }

  // =========================================================================
  // 1. INITIALIZE BLUEPRINT HUD TELEMETRY
  // =========================================================================

  function initHud() {
    const formattedGpa = Number(data.promedio).toFixed(2);
    if (hudGpa) hudGpa.textContent = formattedGpa;
    const sideGpa = document.getElementById('sideGpa');
    if (sideGpa) sideGpa.textContent = formattedGpa;
    
    const approved = data.stats.aprobadas;
    const total = data.stats.total;
    const percent = ((approved / total) * 100).toFixed(1);
    
    if (hudAvance) hudAvance.textContent = `${percent}%`;
    if (hudMateriasRatio) hudMateriasRatio.textContent = `(${approved}/${total})`;
    const sideAvance = document.getElementById('sideAvance');
    if (sideAvance) sideAvance.textContent = `${percent}%`;
    const sideMateriasRatio = document.getElementById('sideMateriasRatio');
    if (sideMateriasRatio) sideMateriasRatio.textContent = `(${approved}/${total})`;

    const chipAprobadas = document.getElementById('chipAprobadas');
    const chipEnCurso = document.getElementById('chipEnCurso');
    const chipCursada = document.getElementById('chipCursada');
    const chipPendientes = document.getElementById('chipPendientes');
    const chipRecursa = document.getElementById('chipRecursa');

    if (chipAprobadas) chipAprobadas.textContent = data.stats.aprobadas;
    if (chipEnCurso) chipEnCurso.textContent = data.stats.en_curso;
    if (chipCursada) chipCursada.textContent = data.stats.cursada_aprobada || 0;
    if (chipPendientes) chipPendientes.textContent = data.stats.pendientes;
    if (chipRecursa) chipRecursa.textContent = data.stats.reprobadas_previas || 0;

    const chipSideAprobadas = document.getElementById('chipSideAprobadas');
    const chipSideEnCurso = document.getElementById('chipSideEnCurso');
    const chipSideCursada = document.getElementById('chipSideCursada');
    const chipSidePendientes = document.getElementById('chipSidePendientes');
    const chipSideRecursa = document.getElementById('chipSideRecursa');

    if (chipSideAprobadas) chipSideAprobadas.textContent = data.stats.aprobadas;
    if (chipSideEnCurso) chipSideEnCurso.textContent = data.stats.en_curso;
    if (chipSideCursada) chipSideCursada.textContent = data.stats.cursada_aprobada || 0;
    if (chipSidePendientes) chipSidePendientes.textContent = data.stats.pendientes;
    if (chipSideRecursa) chipSideRecursa.textContent = data.stats.reprobadas_previas || 0;

    updatePlanBadge();
  }

  // =========================================================================
  // 2. RENDER THE 10-SEMESTER ARCHITECTURAL MATRIX (Fits 100% in Viewport)
  // =========================================================================

  function renderMatrix() {
    matrixContainer.innerHTML = '';

    // 1. Column 0: Separate Ingreso Column
    const colIngreso = document.createElement('div');
    colIngreso.className = 'sem-column col-ingreso-column';
    colIngreso.dataset.semIndex = 0;

    const ingresoSubs = data.materias.filter(m => m.sem_num === 0);
    ingresoSubs.forEach(m => {
      const node = createNodeElement(m);
      colIngreso.appendChild(node);
    });
    matrixContainer.appendChild(colIngreso);

    // 2. Columns 1..10: The 10 Curricular Semester Columns
    const columns = Array.from({ length: 10 }, () => []);

    data.materias.forEach(m => {
      if (m.sem_num === 0) return; // STRICTLY EXCLUDE FROM 1º AÑO SEM 01!
      let semIdx = (m.sem_num || 1) - 1;
      if (semIdx < 0) semIdx = 0;
      if (semIdx > 9) semIdx = 9;
      columns[semIdx].push(m);
    });

    columns.forEach((colSubs, idx) => {
      const colDiv = document.createElement('div');
      colDiv.className = 'sem-column';
      colDiv.dataset.semIndex = idx + 1;

      colSubs.forEach(m => {
        const node = createNodeElement(m);
        colDiv.appendChild(node);
      });

      matrixContainer.appendChild(colDiv);
    });

    attachNodeEvents();
  }

  function createNodeElement(m) {
    const node = document.createElement('div');
    node.className = 'subject-node';
    node.dataset.code = m.code || '';
    node.dataset.status = m.status || 'pendiente';
    node.dataset.failed = m.has_failed ? 'true' : 'false';
    node.setAttribute('role', 'button');
    node.setAttribute('tabindex', '0');

    // Optativa Slot Logic
    if (m.is_optativa_slot) {
      const selections = getSelectedOptativas();
      const assignedCode = selections[currentPlan]?.[m.code];
      const optativa = assignedCode ? findOptativaInCatalog(assignedCode, currentPlan) : null;

      if (!optativa) {
        // Unassigned Optativa Slot
        node.className = 'subject-node node-optativa-slot is-unassigned';
        node.dataset.code = m.code || 'OPT';
        node.dataset.slotCode = m.code;
        node.dataset.isOptativaSlot = 'true';
        node.dataset.status = 'pendiente';
        node.dataset.failed = 'false';

        node.innerHTML = `
          <div class="node-top">
            <span class="node-code">${m.code}</span>
            <span class="node-grade-tag grade-optativa-choose">+ ELEGIR</span>
          </div>
          
          <div class="node-name" title="${m.name}">${m.name}</div>
          
          <div class="node-bottom">
            <span class="optativa-type-hint">${m.tipo_hint || 'Optativa'}</span>
            <span style="font-size: 0.6rem; color: #059669; font-weight: 600;">Elegir materia</span>
          </div>

          <!-- Expanded info revealed on hover -->
          <div class="node-expanded-info">
            <div><strong>${m.year || ''}</strong> · ${m.semester || ''}</div>
            <div>Clic para seleccionar una materia optativa del catálogo</div>
          </div>
        `;
        return node;
      } else {
        // Assigned Optativa
        const activeOptCode = getOptativaActiveCode(optativa, currentPlan);
        const overrides = getStoredOverrides();
        const optOverride = overrides[activeOptCode] || overrides[m.code] || {};
        const status = optOverride.status || 'pendiente';
        const grade = optOverride.grade;
        const failed = !!optOverride.has_failed;

        node.className = 'subject-node node-optativa-slot is-assigned';
        node.dataset.code = m.code || 'OPT';
        node.dataset.slotCode = m.code;
        node.dataset.optCode = activeOptCode;
        node.dataset.isOptativaSlot = 'true';
        node.dataset.status = status;
        node.dataset.failed = failed ? 'true' : 'false';

        let gradeTagHTML = '';
        if (status === 'aprobada' && grade !== null && grade !== undefined && !isNaN(grade)) {
          gradeTagHTML = `<span class="node-grade-tag grade-aprobada">${grade}</span>`;
        } else if (status === 'en_curso') {
          gradeTagHTML = `<span class="node-grade-tag grade-en-curso">EN CURSO</span>`;
        } else if (status === 'cursada_aprobada') {
          gradeTagHTML = `<span class="node-grade-tag grade-cursada">REG</span>`;
        }

        const displayName = `Optativa: ${optativa.name}`;
        const corrText = (currentPlan === '2024' ? (optativa.correlativas_2024 || optativa.correlativas_texto_2024) : (optativa.correlativas_2011 || optativa.correlativas_texto_2011)) || 'Sin correlativas informadas';
        const conditionText = formatConditionText({
          status,
          grade,
          has_failed: failed,
          date: optOverride.date
        });

        node.innerHTML = `
          <div class="node-top">
            <span class="node-code" title="${activeOptCode}">${activeOptCode}</span>
            ${gradeTagHTML}
          </div>
          
          <div class="node-name" title="${m.name}: ${optativa.name}">${displayName}</div>
          
          <div class="node-bottom">
            <span>96hs</span>
            <span class="opt-tipo-badge tipo-${(optativa.tipo || 'A').toLowerCase()}">Tipo ${optativa.tipo || 'A'}</span>
          </div>

          <!-- Expanded info revealed on hover -->
          <div class="node-expanded-info">
            <div><strong>${m.year || ''}</strong> · ${m.semester || ''} · ${optativa.semestre || optativa.semestre_cursada || ''}</div>
            <div>${conditionText}</div>
            <div style="color: #065f46; margin-top: 3px;"><strong>🔗 Correlativas:</strong> ${corrText}</div>
            ${optativa.profesor ? `<div>Prof: ${optativa.profesor}</div>` : ''}
          </div>
        `;
        return node;
      }
    }

    // Regular Subject Card
    let gradeTagHTML = '';
    if (m.status === 'aprobada' && m.grade !== null) {
      gradeTagHTML = `<span class="node-grade-tag grade-aprobada">${m.grade}</span>`;
    } else if (m.status === 'en_curso') {
      gradeTagHTML = `<span class="node-grade-tag grade-en-curso">EN CURSO</span>`;
    } else if (m.status === 'cursada_aprobada') {
      gradeTagHTML = `<span class="node-grade-tag grade-cursada">REG</span>`;
    }

    // Materials Indicator
    const materialsCount = (m.materials || []).length;
    const hasHtmlSummary = (m.materials || []).some(item => item.type === 'html');
    let materialsHTML = '';
    if (materialsCount > 0) {
      materialsHTML = `
        <span class="materials-indicator" title="${materialsCount} materiales disponibles">
          ${hasHtmlSummary ? '📄' : '📁'} ${materialsCount}
        </span>
      `;
    }

    node.innerHTML = `
      <div class="node-top">
        <span class="node-code">${m.code || 'OPT'}</span>
        ${gradeTagHTML}
      </div>
      
      <div class="node-name" title="${m.name}">${m.name}</div>
      
      <div class="node-bottom">
        <span>${m.hs_t ? m.hs_t + 'hs' : ''}</span>
        ${materialsHTML}
      </div>

      <!-- Expanded info revealed on hover -->
      <div class="node-expanded-info">
        <div><strong>${m.year || ''}</strong> · ${m.semester || ''}</div>
        <div>${formatConditionText(m)}</div>
      </div>
    `;

    return node;
  }

  function formatConditionText(m) {
    if (m.status === 'aprobada') {
      const g = (m.grade !== null && m.grade !== undefined && !isNaN(m.grade)) ? `${m.grade} pts` : 'Promocionada';
      return `Aprobada con nota: ${g} (${m.date || 'Acreditada'})`;
    } else if (m.status === 'en_curso') {
      return `Cursando actualmente (${m.date || '2026'})`;
    } else if (m.status === 'cursada_aprobada') {
      return `Regularidad aprobada (debe final)`;
    } else {
      return m.has_failed ? `Pendiente (debe recursar)` : `Pendiente de cursar`;
    }
  }

  // =========================================================================
  // 3. HOVER & TRANSITIVE PATH TRACING (De principio a fin)
  // =========================================================================

  function attachNodeEvents() {
    const nodes = document.querySelectorAll('.subject-node');

    nodes.forEach(node => {
      // Hover event: Full transitive ancestors & descendants (desktop mouse only)
      node.addEventListener('mouseenter', () => {
        const isTouch = window.matchMedia('(max-width: 768px)').matches;
        if (isTouch) return;
        const code = node.dataset.code;
        if (!code) return;
        highlightFullChain(code, node);
      });

      node.addEventListener('mouseleave', () => {
        const isTouch = window.matchMedia('(max-width: 768px)').matches;
        if (isTouch) return;
        clearFullChain();
      });

      // Keyboard focus accessibility: triggers map when focusing a node
      node.addEventListener('focus', () => {
        const code = node.dataset.code;
        if (!code) return;
        highlightFullChain(code, node);
      });

      node.addEventListener('blur', () => {
        const isTouch = window.matchMedia('(max-width: 768px)').matches;
        if (isTouch) return;
        clearFullChain();
      });

      // Click / Tap event: On mobile first tap selects & shows pill, second tap opens drawer. On desktop opens drawer directly.
      node.addEventListener('click', () => {
        const isTouch = window.matchMedia('(max-width: 768px)').matches || ('ontouchstart' in window && window.innerWidth <= 1024);

        if (node.dataset.isOptativaSlot === 'true') {
          const slotCode = node.dataset.slotCode;
          const selections = getSelectedOptativas();
          const assigned = selections[currentPlan]?.[slotCode];
          if (!assigned) {
            hideMobilePill();
            openOptativasModal(slotCode);
            return;
          }
        }

        const code = node.dataset.code;
        const effectiveDrawerCode = (node.dataset.isOptativaSlot === 'true') ? node.dataset.slotCode : code;

        if (isTouch) {
          if (mobileActiveCode === code) {
            hideMobilePill();
            openDrawer(effectiveDrawerCode);
          } else {
            mobileActiveCode = code;
            highlightFullChain(code, node);
            showMobilePill(code, effectiveDrawerCode);
          }
        } else {
          openDrawer(effectiveDrawerCode);
        }
      });

      // Keyboard accessible
      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (node.dataset.isOptativaSlot === 'true') {
            const slotCode = node.dataset.slotCode;
            const selections = getSelectedOptativas();
            const assigned = selections[currentPlan]?.[slotCode];
            if (!assigned) {
              hideMobilePill();
              openOptativasModal(slotCode);
              return;
            }
            hideMobilePill();
            openDrawer(slotCode);
            return;
          }
          const code = node.dataset.code;
          if (code) {
            hideMobilePill();
            openDrawer(code);
          }
        }
      });
    });
  }

  // Animation frame tracker for smooth wire recalculation during card scaling
  let activeAnimationId = null;
  let currentActiveEdges = [];

  function highlightFullChain(code, hoveredNode) {
    const target = subjectMap.get(code);
    if (!target) return;

    if (activeAnimationId) {
      cancelAnimationFrame(activeAnimationId);
      activeAnimationId = null;
    }

    // If state filter was active, clear filter highlight classes so the path takes clear focus
    if (activeStateFilter) {
      document.querySelectorAll('.subject-node').forEach(node => {
        node.classList.remove('is-filter-highlighted', 'is-filter-dimmed');
      });
    }

    matrixContainer.classList.add('has-active-path');
    hoveredNode.classList.add('is-hovered');

    let ancestors = new Set(target.all_ancestors || []);
    let descendants = new Set(target.all_descendants || []);

    // Dynamic correlativas for optativa slot if assigned
    if (target.is_optativa_slot) {
      const selections = getSelectedOptativas();
      const assignedCode = selections[currentPlan]?.[target.code];
      const opt = assignedCode ? findOptativaInCatalog(assignedCode, currentPlan) : null;
      if (opt) {
        const prereqs = (currentPlan === '2024' ? opt.prereqs_2024 : opt.prereqs_2011) || [];
        ancestors = new Set(prereqs);
        prereqs.forEach(pCode => {
          const pObj = subjectMap.get(pCode);
          if (pObj && pObj.all_ancestors) {
            pObj.all_ancestors.forEach(a => ancestors.add(a));
          }
        });
      }
    }

    // Also check if any assigned optativa has this hovered node as an ancestor
    data.materias.forEach(otherM => {
      if (otherM.is_optativa_slot && otherM.code !== code) {
        const selections = getSelectedOptativas();
        const assignedCode = selections[currentPlan]?.[otherM.code];
        const opt = assignedCode ? findOptativaInCatalog(assignedCode, currentPlan) : null;
        if (opt) {
          const prereqs = (currentPlan === '2024' ? opt.prereqs_2024 : opt.prereqs_2011) || [];
          const optAnc = new Set(prereqs);
          prereqs.forEach(pCode => {
            const pObj = subjectMap.get(pCode);
            if (pObj && pObj.all_ancestors) pObj.all_ancestors.forEach(a => optAnc.add(a));
          });
          if (optAnc.has(code)) {
            descendants.add(otherM.code);
          }
        }
      }
    });

    const allNodes = document.querySelectorAll('.subject-node');
    const nodeElemMap = new Map();

    allNodes.forEach(n => {
      const c = n.dataset.code;
      if (c) nodeElemMap.set(c, n);

      if (ancestors.has(c)) {
        n.classList.add('is-ancestor');
      } else if (descendants.has(c)) {
        n.classList.add('is-descendant');
      }
    });

    // Compute active edges with strict Transitive Reduction (A -> B -> C, avoiding shortcut A -> C)
    currentActiveEdges = computeReducedEdges(code, ancestors, descendants);

    // Setup SVG wire paths
    setupWireElements(currentActiveEdges);

    // Initial render
    renderWires(currentActiveEdges, nodeElemMap);

    // Smoothly update wire endpoints while CSS transitions scale nodes / slide canvas (~350ms)
    const startTime = performance.now();
    const duration = 350;

    function step(now) {
      if (!matrixContainer.classList.contains('has-active-path')) return;
      renderWires(currentActiveEdges, nodeElemMap);
      if (now - startTime < duration) {
        activeAnimationId = requestAnimationFrame(step);
      } else {
        activeAnimationId = null;
      }
    }

    activeAnimationId = requestAnimationFrame(step);
  }

  function clearFullChain() {
    if (activeAnimationId) {
      cancelAnimationFrame(activeAnimationId);
      activeAnimationId = null;
    }
    currentActiveEdges = [];

    matrixContainer.classList.remove('has-active-path');
    
    // Preserve defs with arrow markers
    const defs = connectionsSvg.querySelector('defs');
    connectionsSvg.innerHTML = '';
    if (defs) connectionsSvg.appendChild(defs);

    const allNodes = document.querySelectorAll('.subject-node');
    allNodes.forEach(n => {
      n.classList.remove('is-hovered', 'is-ancestor', 'is-descendant');
    });

    // If state filter was active, restore its highlight
    if (activeStateFilter && typeof updateNodesFilterState === 'function') {
      updateNodesFilterState(activeStateFilter);
    }
  }

  // Window resize handler to keep wires aligned
  window.addEventListener('resize', () => {
    if (matrixContainer.classList.contains('has-active-path') && currentActiveEdges.length > 0) {
      const nodeElemMap = new Map();
      document.querySelectorAll('.subject-node').forEach(n => {
        if (n.dataset.code) nodeElemMap.set(n.dataset.code, n);
      });
      renderWires(currentActiveEdges, nodeElemMap);
    }
  });

  // Map Viewport scroll handler to keep SVG wires pixel-perfect during horizontal/vertical scroll
  if (mapViewport) {
    mapViewport.addEventListener('scroll', () => {
      if (matrixContainer.classList.contains('has-active-path') && currentActiveEdges.length > 0) {
        const nodeElemMap = new Map();
        document.querySelectorAll('.subject-node').forEach(n => {
          if (n.dataset.code) nodeElemMap.set(n.dataset.code, n);
        });
        renderWires(currentActiveEdges, nodeElemMap);
      }
    }, { passive: true });

    // Tapping outside nodes on map clears active path on touch devices
    mapViewport.addEventListener('click', (e) => {
      if (!e.target.closest('.subject-node') && !e.target.closest('#mobileActionPill')) {
        if (mobileActiveCode) {
          hideMobilePill();
          clearFullChain();
        }
      }
    });
  }

  // Mobile Action Pill Handlers
  function showMobilePill(code, effectiveDrawerCode) {
    if (!mobileActionPill) return;
    mobileEffectiveDrawerCode = effectiveDrawerCode;
    const m = subjectMap.get(code);
    let displayName = m ? m.name : code;
    let displayCode = code;

    if (m && m.is_optativa_slot) {
      const selections = getSelectedOptativas();
      const assigned = selections[currentPlan]?.[m.code];
      const opt = assigned ? findOptativaInCatalog(assigned, currentPlan) : null;
      if (opt) {
        displayName = `Optativa: ${opt.name}`;
        displayCode = getOptativaActiveCode(opt, currentPlan);
      }
    }

    if (mobilePillCode) mobilePillCode.textContent = displayCode;
    if (mobilePillName) {
      mobilePillName.textContent = displayName;
      mobilePillName.title = displayName;
    }
    mobileActionPill.classList.add('is-visible');
  }

  function hideMobilePill() {
    if (!mobileActionPill) return;
    mobileActionPill.classList.remove('is-visible');
    mobileActiveCode = null;
    mobileEffectiveDrawerCode = null;
  }

  if (mobilePillBtn) {
    mobilePillBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (mobileEffectiveDrawerCode) {
        const codeToOpen = mobileEffectiveDrawerCode;
        hideMobilePill();
        openDrawer(codeToOpen);
      }
    });
  }

  if (mobilePillClose) {
    mobilePillClose.addEventListener('click', (e) => {
      e.stopPropagation();
      hideMobilePill();
      clearFullChain();
    });
  }

  // =========================================================================
  // 4. TRANSITIVE REDUCTION & SVG SEQUENTIAL PATH DRAWING (A -> B -> C)
  // =========================================================================

  /**
   * Transitive Reduction check:
   * Determines if edge u -> v is redundant within the active graph.
   * If there is an intermediate node w in activeNodes where u reaches w and w reaches v,
   * then u -> v is a shortcut and should not be drawn.
   */
  function isTransitiveRedundant(uCode, vCode, activeNodes) {
    const uObj = subjectMap.get(uCode);
    if (!uObj) return false;
    const uDescendants = new Set(uObj.all_descendants || []);

    for (const wCode of activeNodes) {
      if (wCode !== uCode && wCode !== vCode) {
        if (uDescendants.has(wCode)) {
          const wObj = subjectMap.get(wCode);
          if (wObj && (wObj.all_descendants || []).includes(vCode)) {
            return true; // Intermediate node w exists: u -> ... -> w -> ... -> v
          }
        }
      }
    }
    return false;
  }

  function computeReducedEdges(targetCode, ancestors, descendants) {
    const edges = [];
    const drawnKeys = new Set();
    const activeNodes = new Set([targetCode, ...ancestors, ...descendants]);

    // 1. Ancestor sequential chain: (A -> B -> C -> target)
    const ancestorNodes = new Set([targetCode, ...ancestors]);
    ancestorNodes.forEach(vCode => {
      const vObj = subjectMap.get(vCode);
      if (!vObj) return;

      let directPrereqs = vObj.prereq_codes || [];
      if (vObj.is_optativa_slot) {
        const selections = getSelectedOptativas();
        const assignedCode = selections[currentPlan]?.[vObj.code];
        const opt = assignedCode ? findOptativaInCatalog(assignedCode, currentPlan) : null;
        if (opt) {
          directPrereqs = (currentPlan === '2024' ? opt.prereqs_2024 : opt.prereqs_2011) || [];
        }
      }

      directPrereqs.forEach(uCode => {
        if (ancestorNodes.has(uCode)) {
          if (!isTransitiveRedundant(uCode, vCode, activeNodes)) {
            const key = `${uCode}->${vCode}`;
            if (!drawnKeys.has(key)) {
              drawnKeys.add(key);
              edges.push({
                uCode,
                vCode,
                cssClass: 'wire-ancestor',
                markerId: 'arrow-anc'
              });
            }
          }
        }
      });
    });

    // 2. Descendant sequential chain: (target -> D -> E -> F)
    const descendantNodes = new Set([targetCode, ...descendants]);
    descendantNodes.forEach(uCode => {
      const uObj = subjectMap.get(uCode);
      if (!uObj) return;

      let directUnlocks = [...(uObj.unlocks_codes || [])];
      data.materias.forEach(otherM => {
        if (otherM.is_optativa_slot) {
          const selections = getSelectedOptativas();
          const assignedCode = selections[currentPlan]?.[otherM.code];
          const opt = assignedCode ? findOptativaInCatalog(assignedCode, currentPlan) : null;
          if (opt) {
            const prereqs = (currentPlan === '2024' ? opt.prereqs_2024 : opt.prereqs_2011) || [];
            if (prereqs.includes(uCode) && !directUnlocks.includes(otherM.code)) {
              directUnlocks.push(otherM.code);
            }
          }
        }
      });

      directUnlocks.forEach(vCode => {
        if (descendantNodes.has(vCode)) {
          if (!isTransitiveRedundant(uCode, vCode, activeNodes)) {
            const key = `${uCode}->${vCode}`;
            if (!drawnKeys.has(key)) {
              drawnKeys.add(key);
              edges.push({
                uCode,
                vCode,
                cssClass: 'wire-descendant',
                markerId: 'arrow-desc'
              });
            }
          }
        }
      });
    });

    return edges;
  }

  function setupWireElements(edges) {
    const defs = connectionsSvg.querySelector('defs');
    connectionsSvg.innerHTML = '';
    if (defs) connectionsSvg.appendChild(defs);

    edges.forEach((edge, i) => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('class', `svg-wire ${edge.cssClass}`);
      if (edge.markerId) {
        path.setAttribute('marker-end', `url(#${edge.markerId})`);
      }
      path.id = `wire-${i}`;
      connectionsSvg.appendChild(path);
      edge.pathElem = path;
    });
  }

  function renderWires(edges, nodeElemMap) {
    const svgRect = connectionsSvg.getBoundingClientRect();
    if (!svgRect.width || !svgRect.height) return;

    edges.forEach(edge => {
      const uNode = nodeElemMap.get(edge.uCode);
      const vNode = nodeElemMap.get(edge.vCode);
      if (!uNode || !vNode || !edge.pathElem) return;

      const uRect = uNode.getBoundingClientRect();
      const vRect = vNode.getBoundingClientRect();

      // From right edge of prerequisite (u) to left edge of subsequent subject (v)
      const x1 = uRect.right - svgRect.left;
      const y1 = uRect.top + uRect.height / 2 - svgRect.top;

      const x2 = vRect.left - svgRect.left;
      const y2 = vRect.top + vRect.height / 2 - svgRect.top;

      const dx = Math.max(25, Math.abs(x2 - x1) * 0.45);
      const d = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
      edge.pathElem.setAttribute('d', d);
    });
  }

  // =========================================================================
  // 5. CLASSY FLOATING MATERIAL DRAWER (<dialog closedby="any">)
  // =========================================================================

  // =========================================================================
  // 5. CLASSY RESOURCE PORTAL & ACADEMIC HUB (<dialog closedby="any">)
  // =========================================================================

  const CATEGORY_MAP = {
    resumenes: { name: 'Apuntes', icon: '📖' },
    clases: { name: 'Teorías & Clases', icon: '🎓' },
    practicas: { name: 'Prácticas', icon: '📝' },
    parciales: { name: 'Parciales', icon: '📋' },
    proyectos: { name: 'Proyectos', icon: '💼' },
    multimedia: { name: 'Multimedia', icon: '🎧' },
    otros: { name: 'Otros', icon: '📁' }
  };

  let currentDrawerMaterials = [];
  let currentDrawerCategory = 'all';
  let currentDrawerSearch = '';
  let currentDrawerCode = null;

  function updateDrawerHeaderStatus(m) {
    if (drawerStatusSubtitle) {
      drawerStatusSubtitle.textContent = formatConditionText(m);
      drawerStatusSubtitle.dataset.status = m.status || 'pendiente';
      if (m.has_failed) drawerStatusSubtitle.dataset.failed = 'true';
      else drawerStatusSubtitle.removeAttribute('data-failed');
    }
  }

  function openDrawer(code) {
    clearFullChain();
    hideMobilePill();
    const m = subjectMap.get(code);
    if (!m) return;
    currentDrawerCode = code;

    // 1. Optativa Slot Handling
    if (m.is_optativa_slot) {
      const selections = getSelectedOptativas();
      const assignedCode = selections[currentPlan]?.[m.code];
      const optativa = assignedCode ? findOptativaInCatalog(assignedCode, currentPlan) : null;

      if (!optativa) {
        // If unassigned slot, directly open optativas selector modal
        openOptativasModal(m.code);
        return;
      }

      // Show "Cambiar optativa" button in drawer header
      if (btnDrawerChangeOptativa) {
        btnDrawerChangeOptativa.style.display = 'inline-flex';
        btnDrawerChangeOptativa.onclick = (e) => {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          const targetSlotCode = m.code;
          if (materialDrawer && typeof materialDrawer.close === 'function') {
            materialDrawer.close();
          }
          setTimeout(() => {
            openOptativasModal(targetSlotCode);
          }, 40);
        };
      }

      const activeOptCode = getOptativaActiveCode(optativa, currentPlan);
      const overrides = getStoredOverrides();
      const optOverride = overrides[activeOptCode] || overrides[m.code] || {};
      const optStatus = optOverride.status || 'pendiente';
      const optGrade = optOverride.grade;
      const optFailed = !!optOverride.has_failed;

      drawerCode.textContent = activeOptCode;
      drawerTitle.textContent = `Optativa: ${optativa.name}`;
      drawerYearSem.textContent = `${m.year || 'Plan ' + currentPlan} · ${m.semester || ''} · Tipo ${optativa.tipo} (${optativa.semestre_cursada || 'Semestral'})`;
      drawerHours.textContent = `6 hs/sem · 96 hs totales ${optativa.profesor ? '· Prof: ' + optativa.profesor : ''}`;

      // Sync condition select
      if (drawerStatusSelect) {
        if (optFailed && optStatus === 'pendiente') {
          drawerStatusSelect.value = 'recursa';
        } else {
          drawerStatusSelect.value = optStatus;
        }
      }

      // Sync grade editor
      if (drawerGradeEditor && drawerGradeInput) {
        if (optStatus === 'aprobada') {
          drawerGradeEditor.style.display = 'flex';
          drawerGradeInput.value = (optGrade !== null && optGrade !== undefined && !isNaN(optGrade)) ? optGrade : '';
        } else {
          drawerGradeEditor.style.display = 'none';
          drawerGradeInput.value = '';
        }
      }

      updateDrawerHeaderStatus({
        status: optStatus,
        grade: optGrade,
        has_failed: optFailed,
        name: optativa.name,
        date: optOverride.date
      });

      // Correlativas banner
      const corrText = (currentPlan === '2024' ? (optativa.correlativas_2024 || optativa.correlativas_texto_2024) : (optativa.correlativas_2011 || optativa.correlativas_texto_2011)) || 'Sin correlativas informadas';
      const drawerCorrelativasBanner = document.getElementById('drawerCorrelativasBanner');
      const drawerCorrelativasText = document.getElementById('drawerCorrelativasText');
      if (drawerCorrelativasBanner && drawerCorrelativasText) {
        drawerCorrelativasText.textContent = corrText;
        drawerCorrelativasBanner.style.display = 'inline-flex';
      }

      // Official links from catalog
      drawerOfficialLinks.innerHTML = '';
      const progUrl = optativa.program_url || optativa.link_programa;
      const presUrl = optativa.presentation_url || optativa.link_presentacion;
      const webUrl = optativa.catedra_url || optativa.link_web;

      if (progUrl) {
        const link = document.createElement('a');
        link.className = 'official-link-btn';
        link.href = progUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = `<span>📑</span> Programa PDF`;
        link.title = 'Programa Oficial de la Materia (PDF)';
        drawerOfficialLinks.appendChild(link);
      }
      if (presUrl) {
        const link = document.createElement('a');
        link.className = 'official-link-btn';
        link.href = presUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = `<span>🎥</span> Presentación`;
        link.title = 'Video / Presentación de la Cátedra';
        drawerOfficialLinks.appendChild(link);
      }
      if (webUrl) {
        const link = document.createElement('a');
        link.className = 'official-link-btn';
        link.href = webUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = `<span>🌐</span> Cátedra`;
        link.title = 'Sitio Web Oficial de la Cátedra';
        drawerOfficialLinks.appendChild(link);
      }
      if (optativa.folder_rel) {
        const link = document.createElement('a');
        link.className = 'official-link-btn';
        link.href = `${optativa.folder_rel}/README.md`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = `<span>📂</span> Carpeta`;
        link.title = `Abrir carpeta local de la optativa: ${optativa.folder_rel}`;
        drawerOfficialLinks.appendChild(link);
      }

      currentDrawerMaterials = (m.materials || []).concat(optativa.materials || []);
      currentDrawerCategory = 'all';
      currentDrawerSearch = '';
      if (drawerSearchInput) drawerSearchInput.value = '';

      renderDrawerTabs();
      renderDrawerMaterials();

      if (typeof materialDrawer.showModal === 'function') {
        materialDrawer.showModal();
      } else {
        materialDrawer.setAttribute('open', '');
      }
      return;
    }

    // 2. Regular Subject Handling
    if (btnDrawerChangeOptativa) {
      btnDrawerChangeOptativa.style.display = 'none';
    }

    drawerCode.textContent = m.code || 'OPT';
    drawerTitle.textContent = m.name;
    drawerYearSem.textContent = `${m.year || 'Plan 2011'} · ${m.semester || 'Ciclo Superior'}`;
    drawerHours.textContent = `${m.hs_s ? m.hs_s + ' hs/sem' : ''} ${m.hs_t ? '· ' + m.hs_t + ' hs totales' : ''}`;
    
    // Sync condition select
    if (drawerStatusSelect) {
      if (m.has_failed && m.status === 'pendiente') {
        drawerStatusSelect.value = 'recursa';
      } else {
        drawerStatusSelect.value = m.status || 'pendiente';
      }
    }

    // Sync grade editor
    if (drawerGradeEditor && drawerGradeInput) {
      if (m.status === 'aprobada') {
        drawerGradeEditor.style.display = 'flex';
        drawerGradeInput.value = (m.grade !== null && m.grade !== undefined && !isNaN(m.grade)) ? m.grade : '';
      } else {
        drawerGradeEditor.style.display = 'none';
        drawerGradeInput.value = '';
      }
    }

    updateDrawerHeaderStatus(m);

    // Correlativas banner for regular subjects
    const drawerCorrelativasBanner = document.getElementById('drawerCorrelativasBanner');
    const drawerCorrelativasText = document.getElementById('drawerCorrelativasText');
    if (drawerCorrelativasBanner && drawerCorrelativasText) {
      const prereqs = Array.isArray(m.prereq_codes)
        ? m.prereq_codes
        : (typeof m.correlativas === 'string' && m.correlativas.trim() ? m.correlativas.split('-') : (Array.isArray(m.correlativas) ? m.correlativas : []));
      if (prereqs.length > 0) {
        const names = prereqs.map(c => {
          const p = subjectMap.get(c);
          return p ? `${p.name} (${c})` : c;
        }).join(', ');
        drawerCorrelativasText.textContent = names;
        drawerCorrelativasBanner.style.display = 'inline-flex';
      } else {
        drawerCorrelativasBanner.style.display = 'none';
      }
    }

    // Official Links (Web de cátedra y PDF oficial) in Header
    drawerOfficialLinks.innerHTML = '';
    if (m.catedra_url) {
      const link = document.createElement('a');
      link.className = 'official-link-btn';
      link.href = m.catedra_url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = `<span>🌐</span> Cátedra`;
      link.title = 'Sitio Web Oficial de la Cátedra';
      drawerOfficialLinks.appendChild(link);
    }
    if (m.program_url) {
      const link = document.createElement('a');
      link.className = 'official-link-btn';
      link.href = m.program_url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = `<span>📑</span> Programa PDF`;
      link.title = 'Programa Oficial de la Materia (PDF)';
      drawerOfficialLinks.appendChild(link);
    }
    if (m.folder_rel) {
      const link = document.createElement('a');
      link.className = 'official-link-btn';
      link.href = `${m.folder_rel}/README.md`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = `<span>📂</span> Carpeta`;
      link.title = `Abrir carpeta de la materia: ${m.folder_rel}`;
      drawerOfficialLinks.appendChild(link);
    }

    currentDrawerMaterials = m.materials || [];
    currentDrawerCategory = 'all';
    currentDrawerSearch = '';
    if (drawerSearchInput) drawerSearchInput.value = '';

    renderDrawerTabs();
    renderDrawerMaterials();

    // Show native dialog
    if (typeof materialDrawer.showModal === 'function') {
      materialDrawer.showModal();
    } else {
      materialDrawer.setAttribute('open', '');
    }
  }

  function renderDrawerTabs() {
    if (!drawerCategoryTabs) return;
    drawerCategoryTabs.innerHTML = '';

    const totalCount = currentDrawerMaterials.length;

    // Count materials per category
    const catCounts = new Map();
    currentDrawerMaterials.forEach(mat => {
      const cat = mat.category || 'otros';
      catCounts.set(cat, (catCounts.get(cat) || 0) + 1);
    });

    // Build tabs list: 'all' first, then only categories that actually have materials!
    const tabs = [{ key: 'all', name: 'Todos', icon: '⚡', count: totalCount }];

    Object.keys(CATEGORY_MAP).forEach(key => {
      const count = catCounts.get(key) || 0;
      if (count > 0) {
        tabs.push({
          key,
          name: CATEGORY_MAP[key].name,
          icon: CATEGORY_MAP[key].icon,
          count
        });
      }
    });

    catCounts.forEach((count, key) => {
      if (!CATEGORY_MAP[key] && key !== 'all') {
        tabs.push({
          key,
          name: key.toUpperCase(),
          icon: '📁',
          count
        });
      }
    });

    tabs.forEach(tab => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `drawer-tab-chip ${currentDrawerCategory === tab.key ? 'is-active' : ''}`;
      btn.innerHTML = `
        <span class="tab-chip-icon">${tab.icon}</span>
        <span class="tab-chip-label">${tab.name}</span>
        <span class="tab-chip-badge">${tab.count}</span>
      `;
      btn.addEventListener('click', () => {
        currentDrawerCategory = tab.key;
        renderDrawerTabs();
        renderDrawerMaterials();
      });
      drawerCategoryTabs.appendChild(btn);
    });
  }

  function renderDrawerMaterials() {
    if (!drawerMaterialsList) return;
    drawerMaterialsList.innerHTML = '';

    if (currentDrawerMaterials.length === 0) {
      drawerMaterialsList.innerHTML = `
        <div class="drawer-empty-state">
          <div class="empty-icon">📂</div>
          <div class="empty-title">Sin materiales cargados aún</div>
          <div class="empty-desc">Esta materia aún no tiene apuntes o resúmenes indexados. Puedes colocar aquí tus PDFs, ejercicios o videos.</div>
        </div>
      `;
      return;
    }

    // Filter by category and search
    let filtered = currentDrawerMaterials;
    if (currentDrawerCategory !== 'all') {
      filtered = filtered.filter(m => (m.category || 'otros') === currentDrawerCategory);
    }

    if (currentDrawerSearch) {
      filtered = filtered.filter(m => {
        const title = (m.title || '').toLowerCase();
        const desc = (m.desc || '').toLowerCase();
        const cat = (m.category || '').toLowerCase();
        return title.includes(currentDrawerSearch) || desc.includes(currentDrawerSearch) || cat.includes(currentDrawerSearch);
      });
    }

    if (filtered.length === 0) {
      drawerMaterialsList.innerHTML = `
        <div class="drawer-empty-state">
          <div class="empty-icon">🔍</div>
          <div class="empty-title">Sin resultados para "${currentDrawerSearch}"</div>
          <div class="empty-desc">Prueba con otra palabra clave o selecciona "Todos" en las categorías.</div>
        </div>
      `;
      return;
    }

    filtered.forEach(mat => {
      drawerMaterialsList.appendChild(createMaterialCard(mat));
    });
  }

  function createMaterialCard(mat) {
    const card = document.createElement('div');
    const type = (mat.type || 'doc').toLowerCase();
    card.className = `drawer-material-card mat-type-${type}`;

    let icon = '📄';
    let typeLabel = 'DOCUMENTO';
    if (type === 'pdf') {
      icon = '📑';
      typeLabel = 'PDF';
    } else if (type === 'video') {
      icon = '🎥';
      typeLabel = 'VIDEO';
    } else if (type === 'audio') {
      icon = '🎧';
      typeLabel = 'AUDIO';
    } else if (type === 'html') {
      icon = '🌐';
      typeLabel = 'GUÍA HTML';
    } else if (type === 'doc' || type === 'docx') {
      icon = '📝';
      typeLabel = 'WORD';
    } else if (type === 'ppt' || type === 'pptx') {
      icon = '📊';
      typeLabel = 'PRESENTACIÓN';
    }

    const catInfo = CATEGORY_MAP[mat.category] || { name: 'Recurso', icon: '📁' };
    const href = mat.path || mat.url || '#';

    card.innerHTML = `
      <div class="mat-card-top">
        <div class="mat-card-header-left">
          <span class="mat-icon-badge">${icon}</span>
          <span class="mat-cat-pill">${catInfo.icon} ${catInfo.name}</span>
        </div>
        <span class="mat-type-pill">${typeLabel}</span>
      </div>

      <div class="mat-card-body">
        <div class="mat-title" title="${mat.title}">${mat.title}</div>
        <div class="mat-desc">${mat.desc || mat.badge || 'Material de cátedra y apuntes para estudio.'}</div>
      </div>

      <div class="mat-card-footer">
        <a href="${href}" target="_blank" rel="noopener noreferrer" class="mat-open-btn">
          <span>Abrir recurso</span>
          <span class="mat-open-arrow">↗</span>
        </a>
      </div>
    `;
    return card;
  }

  // Real-time search filter input
  if (drawerSearchInput) {
    drawerSearchInput.addEventListener('input', (e) => {
      currentDrawerSearch = e.target.value.toLowerCase().trim();
      renderDrawerMaterials();
    });
  }

  // Handle Condition / Status Change
  if (drawerStatusSelect) {
    drawerStatusSelect.addEventListener('change', () => {
      if (!currentDrawerCode) return;
      const m = subjectMap.get(currentDrawerCode);
      if (!m) return;

      const newStatus = drawerStatusSelect.value;
      let targetCode = m.code;
      let targetName = m.name;

      if (m.is_optativa_slot) {
        const selections = getSelectedOptativas();
        const assignedCode = selections[currentPlan]?.[m.code];
        const optativa = assignedCode ? findOptativaInCatalog(assignedCode, currentPlan) : null;
        if (optativa) {
          targetCode = getOptativaActiveCode(optativa, currentPlan);
          targetName = `Optativa: ${optativa.name}`;
        }
      }

      if (newStatus === 'recursa') {
        m.status = 'pendiente';
        m.has_failed = true;
        m.grade = null;
        if (drawerGradeEditor) drawerGradeEditor.style.display = 'none';
      } else if (newStatus === 'aprobada') {
        m.status = 'aprobada';
        m.has_failed = false;
        if (drawerGradeEditor) {
          drawerGradeEditor.style.display = 'flex';
          if (m.grade === null || m.grade === undefined || isNaN(m.grade)) {
            drawerGradeInput.value = '';
            drawerGradeInput.focus();
          } else {
            drawerGradeInput.value = m.grade;
          }
        }
      } else {
        m.status = newStatus;
        m.has_failed = false;
        m.grade = null;
        if (drawerGradeEditor) drawerGradeEditor.style.display = 'none';
      }

      // Save to localStorage and synchronize equivalent subjects
      persistSubjectOverride({
        code: targetCode,
        status: m.status,
        grade: m.grade,
        has_failed: m.has_failed
      });

      // Reactive update across UI
      recalculateStats();
      updateSubjectNodeInDOM(m);
      updateDrawerHeaderStatus({
        status: m.status,
        grade: m.grade,
        has_failed: m.has_failed,
        name: targetName
      });
      flashSavedIndicator();

      const statusLabels = {
        aprobada: 'Aprobada / Promocionada',
        cursada_aprobada: 'Cursada Aprobada',
        en_curso: 'En Curso',
        pendiente: 'Pendiente',
        recursa: 'Recursa'
      };
      showToast(`${targetName}: ${statusLabels[newStatus] || newStatus}`);
    });
  }

  // Handle Grade Input Change
  if (drawerGradeInput) {
    const persistGrade = () => {
      if (!currentDrawerCode) return;
      const m = subjectMap.get(currentDrawerCode);
      if (!m || m.status !== 'aprobada') return;

      const raw = drawerGradeInput.value.trim();
      const num = parseFloat(raw);
      if (!isNaN(num) && num >= 1 && num <= 10) {
        m.grade = parseFloat(num.toFixed(1));
      } else if (raw === '') {
        m.grade = null;
      }

      let targetCode = m.code;
      let targetName = m.name;
      if (m.is_optativa_slot) {
        const selections = getSelectedOptativas();
        const assignedCode = selections[currentPlan]?.[m.code];
        const optativa = assignedCode ? findOptativaInCatalog(assignedCode, currentPlan) : null;
        if (optativa) {
          targetCode = getOptativaActiveCode(optativa, currentPlan);
          targetName = `Optativa: ${optativa.name}`;
        }
      }

      // Save to localStorage and synchronize equivalent subjects
      persistSubjectOverride({
        code: targetCode,
        status: m.status,
        grade: m.grade,
        has_failed: m.has_failed
      });

      recalculateStats();
      updateSubjectNodeInDOM(m);
      updateDrawerHeaderStatus({
        status: m.status,
        grade: m.grade,
        has_failed: m.has_failed,
        name: targetName
      });
      flashSavedIndicator();
    };

    drawerGradeInput.addEventListener('input', persistGrade);
    drawerGradeInput.addEventListener('change', () => {
      persistGrade();
      if (!currentDrawerCode) return;
      const m = subjectMap.get(currentDrawerCode);
      if (m && m.grade) {
        showToast(`Nota guardada: ${m.grade} pts en ${m.name}`);
      }
    });
  }

  // Expose Global Utilities for User Console Export / Reset / Import
  window.exportAcademicStatus = function() {
    const selections = getSelectedOptativas();
    const overrides = getStoredOverrides();

    const exportData = {
      carrera: data.carrera,
      plan_activo: currentPlan,
      exportDate: new Date().toISOString(),
      stats: data.stats,
      selected_optativas: selections,
      overrides: overrides,
      materias: data.materias.map(m => {
        let code = m.code;
        let name = m.name;
        let isOptativa = false;
        let assignedOptativa = null;

        if (m.is_optativa_slot) {
          isOptativa = true;
          const assignedCode = selections[currentPlan]?.[m.code];
          const opt = assignedCode ? findOptativaInCatalog(assignedCode, currentPlan) : null;
          if (opt) {
            assignedOptativa = {
              code_active: getOptativaActiveCode(opt, currentPlan),
              code_2011: opt.code_2011,
              code_2024: opt.code_2024,
              name: opt.name,
              tipo: opt.tipo,
              profesor: opt.profesor
            };
            code = assignedOptativa.code_active;
            name = `Optativa: ${opt.name}`;
          }
        }

        return {
          code: code,
          slot_code: m.is_optativa_slot ? m.code : undefined,
          name: name,
          status: m.status,
          grade: m.grade,
          date: m.date,
          has_failed: m.has_failed,
          is_optativa: isOptativa,
          optativa_info: assignedOptativa
        };
      })
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `notas_unlp_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Notas, optativas y estado exportados como JSON');
  };

  function importAcademicData(parsed) {
    if (!parsed) return;

    // 1. Restore selected optativas per slot if present in JSON
    if (parsed.selected_optativas && typeof parsed.selected_optativas === 'object') {
      const currentSelections = getSelectedOptativas();
      if (parsed.selected_optativas['2011']) {
        currentSelections['2011'] = { ...currentSelections['2011'], ...parsed.selected_optativas['2011'] };
      }
      if (parsed.selected_optativas['2024']) {
        currentSelections['2024'] = { ...currentSelections['2024'], ...parsed.selected_optativas['2024'] };
      }
      saveSelectedOptativas(currentSelections);
    }

    const newOverrides = getStoredOverrides();
    let importedCount = 0;

    const processEntry = (code, val) => {
      if (!code || typeof code !== 'string') return;
      const upper = code.toUpperCase();
      let cleanCode = upper;

      // Check if code matches a regular subject
      const target = subjectMap.get(upper);
      if (target) {
        cleanCode = target.code;
      } else if (window.OPTATIVAS_CATALOG) {
        // Check if code matches an optativa
        const opt = window.OPTATIVAS_CATALOG.find(item => item.code_2011 === upper || item.code_2024 === upper);
        if (opt) {
          cleanCode = (currentPlan === '2024' ? opt.code_2024 : opt.code_2011) || upper;
        }
      }

      if (!newOverrides[cleanCode]) newOverrides[cleanCode] = {};

      if (typeof val === 'number') {
        newOverrides[cleanCode].status = 'aprobada';
        newOverrides[cleanCode].grade = val;
        newOverrides[cleanCode].has_failed = false;
        importedCount++;
      } else if (typeof val === 'object' && val !== null) {
        if (val.status !== undefined) newOverrides[cleanCode].status = val.status;
        if (val.grade !== undefined) newOverrides[cleanCode].grade = (val.grade !== null && !isNaN(val.grade)) ? Number(val.grade) : null;
        if (val.has_failed !== undefined) newOverrides[cleanCode].has_failed = !!val.has_failed;
        importedCount++;
      }

      // Synchronize equivalent subject or optativa code
      let equivCode = PLAN_EQUIVALENCES[cleanCode];
      if (!equivCode && window.OPTATIVAS_CATALOG) {
        const opt = window.OPTATIVAS_CATALOG.find(item => item.code_2011 === cleanCode || item.code_2024 === cleanCode);
        if (opt) {
          equivCode = (opt.code_2011 === cleanCode) ? opt.code_2024 : opt.code_2011;
        }
      }

      if (equivCode && newOverrides[cleanCode]) {
        newOverrides[equivCode] = { ...newOverrides[cleanCode] };
      }
    };

    if (Array.isArray(parsed)) {
      parsed.forEach(item => {
        if (item && item.code) processEntry(item.code, item);
      });
    } else if (parsed.materias && Array.isArray(parsed.materias)) {
      parsed.materias.forEach(item => {
        if (item && item.code) processEntry(item.code, item);
      });
    } else if (parsed.overrides && typeof parsed.overrides === 'object') {
      Object.keys(parsed.overrides).forEach(code => {
        processEntry(code, parsed.overrides[code]);
      });
    } else if (typeof parsed === 'object') {
      Object.keys(parsed).forEach(k => {
        if (k !== 'selected_optativas' && k !== 'stats') {
          processEntry(k, parsed[k]);
        }
      });
    }

    if (importedCount === 0 && !parsed.selected_optativas) {
      alert('No se reconocieron materias válidas en el archivo JSON. Verifica el formato.');
      return;
    }

    saveStoredOverrides(newOverrides);
    applyStoredOverrides();

    // Re-render matrix in DOM
    renderMatrix();
    recalculateStats();

    // If modal is open, re-sync
    if (currentDrawerCode) {
      openDrawer(currentDrawerCode);
    }

    showToast(`✅ Se importaron las notas y optativas con éxito`);
  }

  window.importAcademicStatus = importAcademicData;

  window.resetAcademicStatus = function() {
    if (confirm('¿Restablecer el estado de todas las materias y optativas?')) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(OPTATIVAS_STORAGE_KEY);
      location.reload();
    }
  };

  // Wire up UI Import / Export buttons (Desktop, Drawer, Side Menu)
  const btnExportNotes = document.getElementById('btnExportNotes');
  const btnSideExportNotes = document.getElementById('btnSideExportNotes');
  const inputImportNotes = document.getElementById('inputImportNotes');
  const inputSideImportNotes = document.getElementById('inputSideImportNotes');
  const drawerExportBtn = document.getElementById('drawerExportBtn');
  const btnSideResetNotes = document.getElementById('btnSideResetNotes');
  const btnResetNotes = document.getElementById('btnResetNotes');

  if (btnExportNotes) {
    btnExportNotes.addEventListener('click', () => window.exportAcademicStatus());
  }

  if (btnSideExportNotes) {
    btnSideExportNotes.addEventListener('click', () => window.exportAcademicStatus());
  }

  if (drawerExportBtn) {
    drawerExportBtn.addEventListener('click', () => window.exportAcademicStatus());
  }

  if (btnSideResetNotes) {
    btnSideResetNotes.addEventListener('click', () => window.resetAcademicStatus());
  }

  if (btnResetNotes) {
    btnResetNotes.addEventListener('click', () => window.resetAcademicStatus());
  }

  function wireJsonImport(inputElement) {
    if (!inputElement) return;
    inputElement.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          importAcademicData(parsed);
        } catch (err) {
          console.error(err);
          alert('Error al leer el archivo JSON. Verifica que sea un JSON válido.');
        } finally {
          inputElement.value = '';
        }
      };
      reader.readAsText(file);
    });
  }

  wireJsonImport(inputImportNotes);
  wireJsonImport(inputSideImportNotes);

  // Side Menu Drawer Elements & Event Wiring
  const sideMenuDrawer = document.getElementById('sideMenuDrawer');
  const btnToggleSideMenu = document.getElementById('btnToggleSideMenu');
  const sideMenuCloseBtn = document.getElementById('sideMenuCloseBtn');
  const btnSidePlan2011 = document.getElementById('btnSidePlan2011');
  const btnSidePlan2024 = document.getElementById('btnSidePlan2024');

  if (btnToggleSideMenu && sideMenuDrawer) {
    btnToggleSideMenu.addEventListener('click', () => {
      sideMenuDrawer.showModal();
    });
  }

  if (sideMenuCloseBtn && sideMenuDrawer) {
    sideMenuCloseBtn.addEventListener('click', () => {
      sideMenuDrawer.close();
    });
  }

  if (sideMenuDrawer) {
    sideMenuDrawer.addEventListener('click', (event) => {
      if (event.target !== sideMenuDrawer) return;
      const rect = sideMenuDrawer.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInside) {
        sideMenuDrawer.close();
      }
    });
  }

  if (btnSidePlan2011) {
    btnSidePlan2011.addEventListener('click', () => switchPlan('2011'));
  }

  if (btnSidePlan2024) {
    btnSidePlan2024.addEventListener('click', () => switchPlan('2024'));
  }

  // Close Drawer
  drawerCloseBtn.addEventListener('click', () => {
    materialDrawer.close();
  });

  // Mobile Touch Gestures: Pull down to close dialogs & menus ("si lo tiro para abajo, quiero poder cerrarlo")
  function setupPullDownToClose(dialog) {
    if (!dialog) return;
    let startY = 0;
    let startX = 0;
    let currentY = 0;
    let currentX = 0;
    let isPulling = false;
    let canPull = false;

    dialog.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      currentY = startY;
      currentX = startX;
      // Only allow pull-down if dialog is at the top of its scroll container
      canPull = (dialog.scrollTop <= 4);
      isPulling = false;
    }, { passive: true });

    dialog.addEventListener('touchmove', (e) => {
      if (e.touches.length !== 1 || !canPull) return;
      currentY = e.touches[0].clientY;
      currentX = e.touches[0].clientX;
      const diffY = currentY - startY;
      const diffX = currentX - startX;

      // Check if dragging downwards
      if (dialog.scrollTop <= 4 && diffY > 10 && diffY > Math.abs(diffX)) {
        isPulling = true;
        dialog.style.transition = 'none';
        dialog.style.transform = `translateY(${Math.max(0, diffY)}px)`;
        if (e.cancelable) {
          e.preventDefault();
        }
      } else if (dialog === sideMenuDrawer && diffX > 10 && diffX > Math.abs(diffY)) {
        // Also support swiping side menu to the right
        isPulling = true;
        dialog.style.transition = 'none';
        dialog.style.transform = `translateX(${Math.max(0, diffX)}px)`;
        if (e.cancelable) {
          e.preventDefault();
        }
      }
    }, { passive: false });

    const finishPull = () => {
      if (!isPulling) return;
      isPulling = false;
      const diffY = currentY - startY;
      const diffX = currentX - startX;
      dialog.style.transition = 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)';

      if (diffY > 65) {
        // Pulled down past threshold: close smoothly
        dialog.style.transform = 'translateY(100%)';
        setTimeout(() => {
          try {
            dialog.close();
          } catch (err) {}
          dialog.style.transform = '';
          dialog.style.transition = '';
        }, 200);
      } else if (dialog === sideMenuDrawer && diffX > 65) {
        // Swiped right past threshold: close smoothly
        dialog.style.transform = 'translateX(100%)';
        setTimeout(() => {
          try {
            dialog.close();
          } catch (err) {}
          dialog.style.transform = '';
          dialog.style.transition = '';
        }, 200);
      } else {
        // Snap back to open position
        dialog.style.transform = '';
        setTimeout(() => {
          dialog.style.transform = '';
          dialog.style.transition = '';
        }, 220);
      }
    };

    dialog.addEventListener('touchend', finishPull, { passive: true });
    dialog.addEventListener('touchcancel', finishPull, { passive: true });
  }

  // Attach pull-to-close gestures to menus and bottom sheets
  setupPullDownToClose(sideMenuDrawer);
  setupPullDownToClose(materialDrawer);
  setupPullDownToClose(optativasModal);

  // Modern Web Guidance: Light Dismiss Fallback for dialog
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    materialDrawer.addEventListener('click', (event) => {
      if (event.target !== materialDrawer) return;
      const rect = materialDrawer.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInside) {
        materialDrawer.close();
      }
    });
  }

  // Clear SVG wires on window resize
  window.addEventListener('resize', () => {
    clearFullChain();
  });

  // =========================================================================
  // 5b. SELECTOR DE ASIGNATURAS OPTATIVAS (<dialog id="optativasModal">)
  // =========================================================================
  let currentModalSlotCode = null;
  let currentModalFilter = 'all';
  let currentModalSearch = '';

  function openOptativasModal(slotCode) {
    hideMobilePill();
    currentModalSlotCode = slotCode;
    const slotSubject = data.materias.find(x => x.code === slotCode) || { name: slotCode, year: 'Plan ' + currentPlan, semester: '' };
    
    if (optativasModalSlotMeta) {
      optativasModalSlotMeta.textContent = `PLAN ${currentPlan} · ${(slotSubject.year || 'CUARTO AÑO').toUpperCase()} · ${(slotSubject.semester || '').toUpperCase()}`;
    }
    if (optativasModalTitle) {
      optativasModalTitle.textContent = `Seleccionar ${slotSubject.name}`;
    }
    if (optativasModalSubtitle) {
      const selections = getSelectedOptativas();
      const assigned = selections[currentPlan]?.[slotCode];
      const currentOpt = assigned ? findOptativaInCatalog(assigned, currentPlan) : null;
      if (currentOpt) {
        optativasModalSubtitle.textContent = `Asignada actualmente: ${currentOpt.name}. Puedes cambiarla o desasignarla.`;
      } else {
        optativasModalSubtitle.textContent = `Elige la materia optativa para asignar a este espacio curricular.`;
      }
    }

    // Reset filters
    currentModalFilter = 'all';
    currentModalSearch = '';
    if (optativasSearchInput) optativasSearchInput.value = '';
    if (optativasFilterChips) {
      optativasFilterChips.querySelectorAll('.opt-chip').forEach(c => {
        c.classList.toggle('is-active', c.dataset.filter === 'all');
      });
    }

    // Configure clear/unassign button
    if (btnClearOptativa) {
      const isAssigned = !!(getSelectedOptativas()[currentPlan]?.[slotCode]);
      btnClearOptativa.style.display = isAssigned ? 'inline-flex' : 'none';
    }

    renderOptativasList();

    if (optativasModal) {
      if (!optativasModal.open) {
        if (typeof optativasModal.showModal === 'function') {
          optativasModal.showModal();
        } else {
          optativasModal.setAttribute('open', '');
        }
      }
    }
  }

  function renderOptativasList() {
    if (!optativasListContainer) return;
    optativasListContainer.innerHTML = '';

    const catalog = window.OPTATIVAS_CATALOG || [];
    if (catalog.length === 0) {
      optativasListContainer.innerHTML = '<div style="padding: 24px; text-align: center; color: #64748b;">No hay optativas cargadas en el catálogo.</div>';
      return;
    }

    const selections = getSelectedOptativas()[currentPlan] || {};
    const currentlyAssignedForThisSlot = selections[currentModalSlotCode];
    const allAssignedInPlan = new Map();
    Object.entries(selections).forEach(([slot, code]) => {
      allAssignedInPlan.set(code, slot);
    });

    // Filter catalog
    let filtered = catalog.filter(opt => {
      // Plan availability
      if (currentPlan === '2024' && opt.available_2024 === false) return false;
      if (currentPlan === '2011' && opt.available_2011 === false) return false;

      // Type / Semester filter chip
      const semText = opt.semestre || opt.semestre_cursada || '';
      if (currentModalFilter === 'tipoA' && opt.tipo !== 'A') return false;
      if (currentModalFilter === 'tipoB' && opt.tipo !== 'B') return false;
      if (currentModalFilter === 'sem1' && (!semText.toLowerCase().includes('1') && !semText.toLowerCase().includes('primer'))) return false;
      if (currentModalFilter === 'sem2' && (!semText.toLowerCase().includes('2') && !semText.toLowerCase().includes('segundo'))) return false;

      // Text search query
      if (currentModalSearch) {
        const q = currentModalSearch.toLowerCase();
        const code = getOptativaActiveCode(opt, currentPlan).toLowerCase();
        const name = (opt.name || '').toLowerCase();
        const prof = (opt.profesor || '').toLowerCase();
        const corr = (currentPlan === '2024' ? (opt.correlativas_2024 || opt.correlativas_texto_2024 || '') : (opt.correlativas_2011 || opt.correlativas_texto_2011 || '')).toLowerCase();
        return code.includes(q) || name.includes(q) || prof.includes(q) || corr.includes(q);
      }
      return true;
    });

    if (filtered.length === 0) {
      optativasListContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 36px 20px; text-align: center; color: #64748b;">
          <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
          <div style="font-weight: 700; color: #1e293b;">No se encontraron materias optativas</div>
          <div style="font-size: 0.85rem; margin-top: 4px;">Prueba ajustando los filtros o el término de búsqueda.</div>
        </div>
      `;
      return;
    }

    filtered.forEach(opt => {
      const activeCode = getOptativaActiveCode(opt, currentPlan);
      const isCurrent = (opt.code_2011 === currentlyAssignedForThisSlot || opt.code_2024 === currentlyAssignedForThisSlot);
      const otherSlotKey = !isCurrent ? (allAssignedInPlan.get(opt.code_2011) || allAssignedInPlan.get(opt.code_2024)) : null;

      const card = document.createElement('div');
      card.className = `optativa-card ${isCurrent ? 'is-selected-here' : ''}`;

      const corrText = (currentPlan === '2024' ? (opt.correlativas_2024 || opt.correlativas_texto_2024) : (opt.correlativas_2011 || opt.correlativas_texto_2011)) || 'Sin correlativas informadas';
      const progUrl = opt.program_url || opt.link_programa;
      const presUrl = opt.presentation_url || opt.link_presentacion;
      const webUrl = opt.catedra_url || opt.link_web;
      const semLabel = opt.semestre || opt.semestre_cursada || 'Semestral';

      // Quick links
      let linksHTML = '';
      if (progUrl) {
        linksHTML += `<a href="${progUrl}" target="_blank" rel="noopener noreferrer" class="opt-link-mini" title="Programa de la materia">📑 Programa</a>`;
      }
      if (presUrl) {
        linksHTML += `<a href="${presUrl}" target="_blank" rel="noopener noreferrer" class="opt-link-mini" title="Presentación / Video de la cátedra">🎥 Presentación</a>`;
      }
      if (webUrl) {
        linksHTML += `<a href="${webUrl}" target="_blank" rel="noopener noreferrer" class="opt-link-mini" title="Sitio web de la cátedra">🌐 Cátedra</a>`;
      }

      // Action button
      let actionBtnHTML = '';
      if (isCurrent) {
        actionBtnHTML = `<button type="button" class="btn-select-optativa is-selected" disabled>✓ Seleccionada</button>`;
      } else if (otherSlotKey) {
        const otherSlotSubject = data.materias.find(x => x.code === otherSlotKey);
        const otherSlotName = otherSlotSubject ? otherSlotSubject.name : otherSlotKey;
        actionBtnHTML = `<button type="button" class="btn-select-optativa is-disabled" disabled title="Ya elegida en ${otherSlotName}">En ${otherSlotName}</button>`;
      } else {
        actionBtnHTML = `<button type="button" class="btn-select-optativa btn-assign-action" data-opt-code="${activeCode}">Elegir materia</button>`;
      }

      card.innerHTML = `
        <div class="optativa-card-top">
          <div style="display: flex; gap: 6px; align-items: center;">
            <span class="opt-tipo-badge tipo-${(opt.tipo || 'A').toLowerCase()}">Tipo ${opt.tipo || 'A'}</span>
            <span class="opt-code-badge">${activeCode}</span>
          </div>
          <span class="opt-sem-tag">${opt.semestre_cursada || 'Semestral'}</span>
        </div>

        <div class="optativa-card-name">${opt.name}</div>

        ${opt.profesor ? `<div class="optativa-card-prof"><strong>Profesor/a:</strong> ${opt.profesor}</div>` : ''}

        <div class="optativa-card-correlativas">
          <strong>Correlativas:</strong> ${corrText}
        </div>

        <div class="optativa-card-actions">
          <div class="opt-quick-links">${linksHTML}</div>
          ${actionBtnHTML}
        </div>
      `;

      // Attach click event for assign button
      const assignBtn = card.querySelector('.btn-assign-action');
      if (assignBtn) {
        assignBtn.addEventListener('click', () => {
          assignOptativaToSlot(currentModalSlotCode, opt);
        });
      }

      optativasListContainer.appendChild(card);
    });
  }

  function assignOptativaToSlot(slotCode, optativa) {
    const selections = getSelectedOptativas();
    const activeCode = getOptativaActiveCode(optativa, currentPlan);
    selections[currentPlan][slotCode] = activeCode;
    saveSelectedOptativas(selections);

    if (optativasModal) optativasModal.close();
    recalculateStats();
    renderMatrix();
    const corrText = (currentPlan === '2024' ? (optativa.correlativas_2024 || optativa.correlativas_texto_2024) : (optativa.correlativas_2011 || optativa.correlativas_texto_2011)) || '';
    showToast(`✅ Optativa elegida: ${optativa.name}`);
    openDrawer(slotCode);
  }

  function unassignOptativaFromSlot(slotCode) {
    const selections = getSelectedOptativas();
    if (selections[currentPlan] && selections[currentPlan][slotCode]) {
      delete selections[currentPlan][slotCode];
      saveSelectedOptativas(selections);
    }

    if (optativasModal) optativasModal.close();
    recalculateStats();
    renderMatrix();
    showToast(`Slot de optativa liberado`);
  }

  // Optativas Modal Event Listeners
  if (optativasModalCloseBtn && optativasModal) {
    optativasModalCloseBtn.addEventListener('click', () => {
      optativasModal.close();
    });
  }

  if (btnClearOptativa) {
    btnClearOptativa.addEventListener('click', () => {
      if (currentModalSlotCode) {
        unassignOptativaFromSlot(currentModalSlotCode);
      }
    });
  }

  if (optativasSearchInput) {
    optativasSearchInput.addEventListener('input', (e) => {
      currentModalSearch = e.target.value.toLowerCase().trim();
      renderOptativasList();
    });
  }

  if (optativasFilterChips) {
    optativasFilterChips.addEventListener('click', (e) => {
      const chip = e.target.closest('.opt-chip');
      if (!chip) return;
      optativasFilterChips.querySelectorAll('.opt-chip').forEach(c => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      currentModalFilter = chip.dataset.filter || 'all';
      renderOptativasList();
    });
  }

  // Modern Web Guidance: Light Dismiss Fallback for optativasModal
  if (!('closedBy' in HTMLDialogElement.prototype) && optativasModal) {
    optativasModal.addEventListener('click', (event) => {
      if (event.target !== optativasModal) return;
      const rect = optativasModal.getBoundingClientRect();
      const isInside = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInside) {
        optativasModal.close();
      }
    });
  }

  // =========================================================================
  // 6. INTERACTIVE STATE FILTERING (Aprobada, En curso, Cursada, Pendiente, Recursa)
  // =========================================================================
  let activeStateFilter = null;

  function initLegendFilters() {
    const legendChips = document.querySelectorAll('.legend-chip[data-filter]');

    legendChips.forEach(chip => {
      const filter = chip.dataset.filter;

      // Click: Toggle persistent filter
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        if (activeStateFilter === filter) {
          clearStateFilter();
        } else {
          applyStateFilter(filter);
        }
      });

      // Hover: Live preview if no filter is locked
      chip.addEventListener('mouseenter', () => {
        if (!activeStateFilter) {
          previewStateFilter(filter);
        }
      });

      chip.addEventListener('mouseleave', () => {
        if (!activeStateFilter) {
          clearStateFilter();
        }
      });

      // Keyboard accessible
      chip.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (activeStateFilter === filter) {
            clearStateFilter();
          } else {
            applyStateFilter(filter);
          }
        }
      });
    });

    // Side menu clear filter button
    const btnSideClearFilter = document.getElementById('btnSideClearFilter');
    if (btnSideClearFilter) {
      btnSideClearFilter.addEventListener('click', (e) => {
        e.stopPropagation();
        clearStateFilter();
      });
    }

    // Clicking on empty map area clears the filter
    mapViewport.addEventListener('click', (e) => {
      if (e.target === mapViewport || e.target === matrixContainer) {
        if (activeStateFilter) {
          clearStateFilter();
        }
      }
    });
  }

  function applyStateFilter(filter) {
    activeStateFilter = filter;
    matrixContainer.classList.add('has-state-filter');

    const legendChips = document.querySelectorAll('.legend-chip[data-filter]');
    legendChips.forEach(c => {
      if (c.dataset.filter === filter) {
        c.classList.add('is-active');
      } else {
        c.classList.remove('is-active');
      }
    });

    updateNodesFilterState(filter);
  }

  function previewStateFilter(filter) {
    matrixContainer.classList.add('has-state-filter');
    updateNodesFilterState(filter);
  }

  function clearStateFilter() {
    activeStateFilter = null;
    matrixContainer.classList.remove('has-state-filter');

    const legendChips = document.querySelectorAll('.legend-chip[data-filter]');
    legendChips.forEach(c => c.classList.remove('is-active'));

    const allNodes = document.querySelectorAll('.subject-node');
    allNodes.forEach(node => {
      node.classList.remove('is-filter-highlighted', 'is-filter-dimmed');
    });
  }

  function updateNodesFilterState(filter) {
    const allNodes = document.querySelectorAll('.subject-node');
    allNodes.forEach(node => {
      let matches = false;
      if (filter === 'recursa') {
        matches = (node.dataset.failed === 'true');
      } else {
        matches = (node.dataset.status === filter);
      }

      if (matches) {
        node.classList.add('is-filter-highlighted');
        node.classList.remove('is-filter-dimmed');
      } else {
        node.classList.add('is-filter-dimmed');
        node.classList.remove('is-filter-highlighted');
      }
    });
  }

  // =========================================================================
  // 7. MOUSE PROXIMITY FOR INGRESO SLIDING CANVAS ("se mueva TODO el grafico")
  // =========================================================================

  let isIngresoPanned = false;

  if (mapViewport && graphCanvas) {
    mapViewport.addEventListener('mousemove', (e) => {
      const rect = mapViewport.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;

      if (!isIngresoPanned) {
        // When cursor approaches the left edge (< 45px), slide entire graph to the right
        if (mouseX < 45) {
          isIngresoPanned = true;
          graphCanvas.classList.add('show-ingreso');
        }
      } else {
        // While graph is slid to show Ingreso (which is 145px wide):
        // If mouse moves past 175px back towards the matrix, slide graph back
        if (mouseX > 175) {
          const hoveredIngreso = e.target && e.target.closest && e.target.closest('.col-ingreso-column, .col-ingreso-header');
          if (!hoveredIngreso) {
            isIngresoPanned = false;
            graphCanvas.classList.remove('show-ingreso');
          }
        }
      }
    });

    mapViewport.addEventListener('mouseleave', () => {
      isIngresoPanned = false;
      graphCanvas.classList.remove('show-ingreso');
    });

    if (leftEdgeTrigger) {
      leftEdgeTrigger.addEventListener('mouseenter', () => {
        isIngresoPanned = true;
        graphCanvas.classList.add('show-ingreso');
      });
    }

    graphCanvas.addEventListener('transitionend', () => {
      if (matrixContainer.classList.contains('has-active-path') && currentActiveEdges.length > 0) {
        const nodeElemMap = new Map();
        document.querySelectorAll('.subject-node').forEach(n => {
          if (n.dataset.code) nodeElemMap.set(n.dataset.code, n);
        });
        renderWires(currentActiveEdges, nodeElemMap);
      }
    });
  }

  updatePlanBadge();
  applyStoredOverrides();
  renderMatrix();
  initLegendFilters();
});
