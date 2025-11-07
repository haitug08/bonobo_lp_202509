const followNav = document.querySelector('.follow-nav');
let lastScrollY = window.scrollY;

// 繝医ャ繝励�繝ｼ繧ｸ縺九←縺�°繧貞愛螳夲ｼ�"/" 縺ｾ縺溘� "/index.html" 縺ｮ蝣ｴ蜷茨ｼ�
const isTopPage = window.location.pathname === "/" || window.location.pathname.endsWith("/index.html");

followNav.classList.add('show');

// if (isTopPage) {
//   // 繝医ャ繝励�繝ｼ繧ｸ縺ｪ繧峨せ繧ｯ繝ｭ繝ｼ繝ｫ縺ｧ繝翫ン繧貞�縺�
//   window.addEventListener('scroll', () => {
//     followNav.classList.add('show');
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY) {
//       followNav.classList.add('show');
//     } else {
//       followNav.classList.remove('show');
//     }

//     lastScrollY = currentScrollY; // 迴ｾ蝨ｨ縺ｮ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ菴咲ｽｮ繧呈峩譁ｰ
//   });
// } else {
//   // 繝医ャ繝励�繝ｼ繧ｸ莉･螟悶↑繧峨リ繝薙ｒ蟶ｸ縺ｫ陦ｨ遉ｺ
//   followNav.classList.add('show');
// }

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-cont");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const tabIndex = tab.getAttribute("data-tab");

      // 繧ｿ繝悶�繧｢繧ｯ繝�ぅ繝悶け繝ｩ繧ｹ蛻�ｊ譖ｿ縺�
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // 繧ｳ繝ｳ繝�Φ繝��繝輔ぉ繝ｼ繝牙�繧頑崛縺�
      contents.forEach(content => {
        if (content.classList.contains(`tab-cont-${tabIndex}`)) {
          content.style.display = "block";
          requestAnimationFrame(() => {
            requestAnimationFrame(() => content.classList.add("active"));
          });
        } else {
          content.classList.remove("active");
          setTimeout(() => content.style.display = "none", 500);
        }
      });
    });
  });
});

// 繝輔か繝ｼ繝�縺ｮselect隕∫ｴ�縺ｮ縲碁∈謚槭＠縺ｦ縺上□縺輔＞縲阪�譁�ｭ�
function Color(sample){
  if( sample.value == 0 ){
   sample.style.color = '';
  }else{
   sample.style.color = '#000';
  }
 }

 document.addEventListener("DOMContentLoaded", function () {
  const oya = document.querySelector(".tab-content");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const contents = {
    a: document.querySelector(".tab-cont-a"),
    b: document.querySelector(".tab-cont-b"),
    c: document.querySelector(".tab-cont-c"),
  };

  function updateHeight(activeTab) {
    if (contents[activeTab] && oya) {
      oya.style.height = `${contents[activeTab].offsetHeight}px`;
    }
  }

  // 蛻晏屓繝ｭ繝ｼ繝画凾縺ｫ鬮倥＆繧定ｨｭ螳�
  updateHeight("a");

  // 繧ｿ繝悶け繝ｪ繝�け譎ゅ↓鬮倥＆繧呈峩譁ｰ
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const activeTab = btn.getAttribute("data-tab");
      setTimeout(() => updateHeight(activeTab), 100); // 驕�ｻｶ繧貞�繧後ｋ縺薙→縺ｧ鬮倥＆縺ｮ蜿肴丐繧堤｢ｺ螳溘↓縺吶ｋ
    });
  });

  // 繧ｦ繧｣繝ｳ繝峨え繝ｪ繧ｵ繧､繧ｺ譎ゅ↓繧るｫ倥＆繧貞�險育ｮ�
  window.addEventListener("resize", function () {
    const activeTab = document.querySelector(".tab-btn.active").getAttribute("data-tab");
    updateHeight(activeTab);
  });
});


 // 繝｢繝ｼ繝繝ｫ繧ｦ繧｣繝ｳ繝峨え
$(function() {
  $('.js-modal-open').on('click', function(event) {
    event.preventDefault(); // 繝壹�繧ｸ荳企Κ縺ｫ謌ｻ繧峨↑縺�ｈ縺�↓縺吶ｋ
    var target = $(this).data('modal');
    var modal = $('#' + target);
    modal.addClass('is-active');

    // 繝ｩ繧ｸ繧ｪ繝懊ち繝ｳ縺ｮ required 繧剃ｸ譎ら噪縺ｫ隗｣髯､
    $('input[name="history"]').removeAttr('required');
  });

  // 繝｢繝ｼ繝繝ｫ繧帝哩縺倥ｋ蜃ｦ逅�
  $('.js-modal-close').on('click', function() {
    $(this).closest('.modal').removeClass('is-active');
  });

  // 繝｢繝ｼ繝繝ｫ螟悶ｒ繧ｯ繝ｪ繝�け縺励◆髫帙↓髢峨§繧句�逅�
  $(document).on('click', function(event) {
    if ($(event.target).hasClass('modal')) {
      $(event.target).removeClass('is-active');
    }
  });

  // 縲悟酔諢上☆繧九阪�繧ｿ繝ｳ縺ｮ蜃ｦ逅�
  $('.agree-btn').on('click', function(event) {
    event.preventDefault(); // 繝壹�繧ｸ荳企Κ縺ｫ謌ｻ繧峨↑縺�ｈ縺�↓縺吶ｋ
    var modal = $(this).closest('.modal');
    modal.removeClass('is-active');

    // 繝｢繝ｼ繝繝ｫ繧帝幕縺�◆繝懊ち繝ｳ縺ｮ繝�く繧ｹ繝医→繧ｹ繧ｿ繧､繝ｫ繧貞､画峩
    var openButton = $('.js-modal-open[data-modal="' + modal.attr('id') + '"]');
    openButton.text('遒ｺ隱肴ｸ医∩').css({
      'background-color': 'gray',
      'cursor': 'pointer'
    }).addClass('checked'); // 遒ｺ隱肴ｸ医∩縺ｮ繝槭�繧ｯ繧定ｿｽ蜉�
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form"); // 繝輔か繝ｼ繝�隕∫ｴ�
  const submitButtons = document.querySelectorAll('button[type="submit"]');

  submitButtons.forEach((submitButton) => {
    submitButton.addEventListener('click', function(event) {
      let isValid = true; // 繝輔か繝ｼ繝�騾∽ｿ｡蜿ｯ閭ｽ縺九←縺�°
      const invalidFields = []; // 辟｡蜉ｹ縺ｪ繝輔ぅ繝ｼ繝ｫ繝峨ｒ譬ｼ邏�
  
      // 2. 繝｢繝ｼ繝繝ｫ繝懊ち繝ｳ縺ｮ繝舌Μ繝��繧ｷ繝ｧ繝ｳ (Constraint Validation API)
      $('.js-modal-open').each(function() {
        if (!$(this).hasClass('checked')) {
          isValid = false;
          invalidFields.push(this); // 辟｡蜉ｹ縺ｪ繝輔ぅ繝ｼ繝ｫ繝峨→縺励※霑ｽ蜉�
  
          // 譌｢縺ｫ繧ｨ繝ｩ繝ｼ繝｡繝�そ繝ｼ繧ｸ縺後↑縺��ｴ蜷医�縺ｿ霑ｽ蜉�
          if (!$(this).next('.modal-error-message').length) {
            $(this).after('<p class="modal-error-message" style="color: red; font-size: 12px;">蜀�ｮｹ繧堤｢ｺ隱阪＠縺ｦ縺上□縺輔＞縲�</p>');
          }
        } else {
          // 遒ｺ隱肴ｸ医∩縺ｪ繧峨お繝ｩ繝ｼ繝｡繝�そ繝ｼ繧ｸ繧貞炎髯､
          $(this).next('.modal-error-message').remove();
        }
      });
  
      // 3. Constraint Validation API 繧剃ｽｿ縺｣縺ｦ繧ｨ繝ｩ繝ｼ陦ｨ遉ｺ
      if (!isValid) {
        event.preventDefault(); // 繝輔か繝ｼ繝�騾∽ｿ｡繧帝亟縺�
  
        // 譛蛻昴�辟｡蜉ｹ縺ｪ繝輔ぅ繝ｼ繝ｫ繝峨↓繝輔か繝ｼ繧ｫ繧ｹ繧貞ｽ薙※繧�
        if (invalidFields.length > 0) {
          invalidFields[0].focus();
        }
      }
    });
  })  

  // 繝｢繝ｼ繝繝ｫ繧ｦ繧｣繝ｳ繝峨え縺ｮ蜃ｦ逅�
  $('.js-modal-open').on('click', function(event) {
    event.preventDefault();
    var target = $(this).data('modal');
    $('#' + target).addClass('is-active');
  });

  $('.js-modal-close').on('click', function() {
    $(this).closest('.modal').removeClass('is-active');
  });

  const requiredChecks = document.querySelectorAll('.modal-open').length;

  $('.agree-btn').on('click', function(event) {
    event.preventDefault();
    var modal = $(this).closest('.modal');
    modal.removeClass('is-active');

    var openButton = $('.js-modal-open[data-modal="' + modal.attr('id') + '"]');
    openButton.text('遒ｺ隱肴ｸ医∩').css({
      'background-color': 'gray',
      'cursor': 'pointer'
    }).addClass('checked'); // 遒ｺ隱肴ｸ医∩縺ｮ繝槭�繧ｯ繧定ｿｽ蜉�

    const checkedCount = document.querySelectorAll('.modal-open.checked').length;
    if (checkedCount === requiredChecks) {
      document.getElementById('complete-btn').disabled = false;
    }
  });

  $(document).on('click', function(event) {
    if ($(event.target).hasClass('modal')) {
      $(event.target).removeClass('is-active');
    }
  });

});

// 繝医Λ繝悶Ν縺ｫ髢｢縺吶ｋ蜻顔衍縺ｮ縲後�縺�阪ｒ驕ｸ謚槭☆繧九→陦ｨ遉ｺ縺輔ｌ繧句�逅�
document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[name="has_trouble"]');
  const detailSection = document.getElementById("trouble-detail");

  radios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "縺ｯ縺�" && radio.checked) {
        detailSection.style.display = "block";
      } else if (radio.value === "縺�＞縺�" && radio.checked) {
        detailSection.style.display = "none";
      }
    });
  });
});
