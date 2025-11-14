export type TDocParagraph = {
  paragraph_id: string;           // "1.1", "2.4" и т.п.
  title?: string;                 // Подзаголовок
  text?: string;                  // Основной текст блока
  text_list?: string[];           // Маркированные пункты
  sub_paragraphs?: TDocParagraph[]; // Вложенные подпункты (1.1.1, 1.1.2...)
};

export type TDocumentBase = {
  doc_title: string;              // Название документа
  description?: string;           // Краткое описание документа
  sections: {
    section_id: string;           // "1", "2", "3"
    title: string;                // Название раздела
    paragraphs: TDocParagraph[];  // Пункты внутри раздела
  }[];
};