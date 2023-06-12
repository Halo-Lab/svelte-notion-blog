type NotionProperty = {
  id: string;
  type: string;
};

type RichTextProperty = NotionProperty & {
  rich_text: Array<{ plain_text: string }>;
};

type TitleProperty = NotionProperty & {
  title: Array<{ plain_text: string }>;
};

type NumberProperty = NotionProperty & {
  number: number;
};

type DateProperty = NotionProperty & {
  date: { start: string };
};

export type NotionItem = {
  object: string;
  id: string;
  properties: {
    id: NumberProperty;
    title: TitleProperty;
    author: RichTextProperty;
    avatar_link: RichTextProperty;
    tag: RichTextProperty;
    image: RichTextProperty;
    post: RichTextProperty;
    date: DateProperty;
  };
};