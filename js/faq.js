document.addEventListener("DOMContentLoaded", function () {
     const faqData = [{
          question: "Сіздің қызметіңіз не?",
          answer: "Біздің қызметіміз үйіңізді немесе кеңсеңізді қауіпсіздікпен және тазалықпен қамтамасыз ету үшін кәсіби дезинфекциялау қызметтерін ұсынады.",
      },
      {
          question: "Дезинфекцияға өтінімді қаншалықты тез жасауға болады?",
          answer: "Біздің қызметіміз арқылы өтінімді жасау тек бірнеше минутты алады. Өтініміңіздің мәртебесін тексеріп, орындалған жұмыстар туралы толық ақпарат алуға әрқашан мүмкіндігіңіз бар.",
      },
      {
          question: "Дезинфекцияның мәртебесін қалай білуге болады?",
          answer: "Өтініміңіздің мәртебесін тексеріп, орындалған жұмыстар туралы толық ақпарат алуға әрқашан мүмкіндігіңіз бар. Барлық деректер ашық және нақты уақыт режимінде қолжетімді.",
      },
      {
          question: "Қызметті пайдалануға шектеулер бар ма?",
          answer: "Жоқ, бізде шектеулер жоқ. Сонымен қатар, біздің тұрақты клиенттеріміз үшін тиімді шарттар мен бонустар ұсынамыз.",
      },
      {
          question: "Егер сұрақтарым болса, сіздермен қалай байланысуға болады?",
          answer: "Егер сұрақтарыңыз болса немесе қосымша ақпарат қажет болса, Telegram немесе WhatsApp арқылы бізбен байланысыңыз, төмендегі сәйкес түймені басыңыз."
      }];
      
     const faqAccordion = document.getElementById('faq-accordion');

     faqData.forEach((faq, index) => {
          const faqItem = document.createElement('div');
          faqItem.classList.add('faq-item');

          const question = document.createElement('div');
          question.classList.add('faq-question');
          question.textContent = `${index + 1}.${faq.question}`;

          const answer = document.createElement('div');
          answer.classList.add('faq-answer');
          answer.textContent = faq.answer;

          faqItem.appendChild(question);
          faqItem.appendChild(answer);
          faqAccordion.appendChild(faqItem);
     });
});

