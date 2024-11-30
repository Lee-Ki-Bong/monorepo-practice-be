import { Column, Entity } from "typeorm";

@Entity("template2_data", { schema: "makeshop" })
export class Template2Data {
  @Column("int", { primary: true, name: "design_id", default: () => "'0'" })
  designId: number;

  @Column("enum", {
    primary: true,
    name: "page_type",
    enum: [
      "",
      "leftmenu",
      "main",
      "bottom",
      "login",
      "logout",
      "topmenu",
      "brandpage",
      "detail_info",
      "detail_review",
      "detail_qna",
      "search",
      "basket",
      "notice_popup",
      "notice_list",
      "useinfo",
      "memberlogin",
      "password",
      "orderlogin",
      "confirmlogin",
      "mypage",
      "idinfo",
      "iddup",
      "cscenter",
      "product_brand",
    ],
    default: () => "'main'",
  })
  pageType:
    | ""
    | "leftmenu"
    | "main"
    | "bottom"
    | "login"
    | "logout"
    | "topmenu"
    | "brandpage"
    | "detail_info"
    | "detail_review"
    | "detail_qna"
    | "search"
    | "basket"
    | "notice_popup"
    | "notice_list"
    | "useinfo"
    | "memberlogin"
    | "password"
    | "orderlogin"
    | "confirmlogin"
    | "mypage"
    | "idinfo"
    | "iddup"
    | "cscenter"
    | "product_brand";

  @Column("longtext", { name: "body" })
  body: string;
}
