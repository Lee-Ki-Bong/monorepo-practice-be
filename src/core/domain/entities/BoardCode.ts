import { Column, Entity } from "typeorm";

@Entity("board_code", { schema: "makeshop" })
export class BoardCode {
  @Column("varchar", { primary: true, name: "code", length: 24 })
  code: string;

  @Column("varchar", { name: "boardname", nullable: true, length: 240 })
  boardname: string | null;

  @Column("varchar", { name: "passwd", length: 12 })
  passwd: string;

  @Column("varchar", { name: "home", nullable: true, length: 50 })
  home: string | null;

  @Column("varchar", { name: "backimage", nullable: true, length: 100 })
  backimage: string | null;

  @Column("varchar", {
    name: "titlecolor",
    nullable: true,
    length: 6,
    default: () => "'f5f5dc'",
  })
  titlecolor: string | null;

  @Column("varchar", { name: "filepath", nullable: true, length: 30 })
  filepath: string | null;

  @Column("tinyint", { name: "rowsu", nullable: true, default: () => "'10'" })
  rowsu: number | null;

  @Column("char", {
    name: "member",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  member: string | null;

  @Column("char", {
    name: "writer",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  writer: string | null;

  @Column("enum", {
    name: "nickname_replace_type",
    enum: ["", "user_name", "user_id"],
    default: () => "'user_name'",
  })
  nicknameReplaceType: "" | "user_name" | "user_id";

  @Column("char", {
    name: "boardtype",
    nullable: true,
    length: 3,
    default: () => "'05'",
  })
  boardtype: string | null;

  @Column("mediumint", {
    name: "traffic",
    nullable: true,
    unsigned: true,
    default: () => "'2'",
  })
  traffic: number | null;

  @Column("int", { name: "b2_id", nullable: true, default: () => "'1'" })
  b2Id: number | null;

  @Column("enum", {
    name: "b2_type",
    nullable: true,
    enum: ["", "template", "indi"],
    default: () => "'template'",
  })
  b2Type: "" | "template" | "indi" | null;

  @Column("mediumint", {
    name: "board_width",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  boardWidth: number | null;

  @Column("mediumint", {
    name: "comment_width",
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  commentWidth: number | null;

  @Column("varchar", { name: "groupid", nullable: true, length: 4 })
  groupid: string | null;

  @Column("varchar", { name: "groupid_w", nullable: true, length: 4 })
  groupidW: string | null;

  @Column("varchar", { name: "msg_login", nullable: true, length: 255 })
  msgLogin: string | null;

  @Column("varchar", { name: "msg_grade", nullable: true, length: 255 })
  msgGrade: string | null;

  @Column("varchar", { name: "date", nullable: true, length: 14 })
  date: string | null;

  @Column("char", {
    name: "adminonly",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  adminonly: string | null;

  @Column("char", {
    name: "security",
    nullable: true,
    length: 2,
    default: () => "'11'",
  })
  security: string | null;

  @Column("varchar", { name: "admin_name", nullable: true, length: 20 })
  adminName: string | null;

  @Column("char", {
    name: "lock_ok",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  lockOk: string | null;

  @Column("char", {
    name: "nextlist",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  nextlist: string | null;

  @Column("varchar", {
    name: "m_move_page",
    length: 200,
    default: () => "'LIST'",
  })
  mMovePage: string;

  @Column("varchar", {
    name: "move_page",
    length: 200,
    default: () => "'LIST'",
  })
  movePage: string;

  @Column("char", {
    name: "comment",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  comment: string | null;

  @Column("enum", {
    name: "comment_sorivu",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  commentSorivu: "" | "Y" | "N";

  @Column("enum", {
    name: "comment_naverapi",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  commentNaverapi: "" | "Y" | "N";

  @Column("mediumint", {
    name: "comment_min_length",
    unsigned: true,
    default: () => "'0'",
  })
  commentMinLength: number;

  @Column("mediumint", {
    name: "comment_max_length",
    unsigned: true,
    default: () => "'500'",
  })
  commentMaxLength: number;

  @Column("mediumint", {
    name: "board_min_length",
    unsigned: true,
    default: () => "'0'",
  })
  boardMinLength: number;

  @Column("char", {
    name: "reply",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  reply: string | null;

  @Column("char", {
    name: "comip",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  comip: string | null;

  @Column("char", {
    name: "datedisplay",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  datedisplay: string | null;

  @Column("char", {
    name: "hitplus",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  hitplus: string | null;

  @Column("varchar", { name: "notice", nullable: true, length: 250 })
  notice: string | null;

  @Column("mediumtext", { name: "filter", nullable: true })
  filter: string | null;

  @Column("enum", {
    name: "filtertype",
    nullable: true,
    enum: ["", "Y", "1", "2"],
    default: () => "'Y'",
  })
  filtertype: "" | "Y" | "1" | "2" | null;

  @Column("enum", {
    name: "comm_fil",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  commFil: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "comm_fil2",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  commFil2: "" | "Y" | "N" | null;

  @Column("char", {
    name: "newimg",
    nullable: true,
    length: 1,
    default: () => "'0'",
  })
  newimg: string | null;

  @Column("enum", {
    name: "newicon_type",
    enum: ["", "HOUR", "DAY"],
    default: () => "'DAY'",
  })
  newiconType: "" | "HOUR" | "DAY";

  @Column("mediumint", {
    name: "newicon",
    unsigned: true,
    default: () => "'1'",
  })
  newicon: number;

  @Column("char", {
    name: "img_resize",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  imgResize: string | null;

  @Column("varchar", { name: "addcode", nullable: true, length: 255 })
  addcode: string | null;

  @Column("mediumtext", { name: "header", nullable: true })
  header: string | null;

  @Column("enum", {
    name: "header_unmarked",
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  headerUnmarked: "" | "Y" | "N";

  @Column("varchar", { name: "fixtitle", nullable: true, length: 255 })
  fixtitle: string | null;

  @Column("mediumtext", { name: "writeword", nullable: true })
  writeword: string | null;

  @Column("mediumtext", { name: "m_writeword", nullable: true })
  mWriteword: string | null;

  @Column("int", { name: "cnt", nullable: true, default: () => "'0'" })
  cnt: number | null;

  @Column("mediumtext", { name: "selsubject", nullable: true })
  selsubject: string | null;

  @Column("mediumtext", { name: "functions" })
  functions: string;

  @Column("mediumtext", { name: "options", nullable: true })
  options: string | null;

  @Column("char", {
    name: "main_post",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  mainPost: string | null;

  @Column("char", { name: "use_editor", length: 1, default: () => "'N'" })
  useEditor: string;

  @Column("enum", {
    name: "use_editor_img_use",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useEditorImgUse: "" | "Y" | "N" | null;

  @Column("char", {
    name: "areaprint",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  areaprint: string | null;

  @Column("varchar", {
    name: "usericon_type",
    length: 10,
    default: () => "'NONE'",
  })
  usericonType: string;

  @Column("mediumint", {
    name: "thumb_size",
    nullable: true,
    unsigned: true,
    default: () => "'250'",
  })
  thumbSize: number | null;

  @Column("enum", {
    name: "thumb_use_bg",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  thumbUseBg: "" | "Y" | "N" | null;

  @Column("varchar", {
    name: "mini_bgcolor",
    nullable: true,
    length: 6,
    default: () => "'FFFFFF'",
  })
  miniBgcolor: string | null;

  @Column("mediumtext", { name: "board_info_form", nullable: true })
  boardInfoForm: string | null;

  @Column("enum", {
    name: "privercy_use",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  privercyUse: "" | "Y" | "N" | null;

  @Column("mediumtext", { name: "change_word", nullable: true })
  changeWord: string | null;

  @Column("enum", {
    name: "my_read",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  myRead: "" | "Y" | "N" | null;

  @Column("varchar", { name: "startendword", nullable: true, length: 255 })
  startendword: string | null;

  @Column("char", { name: "marker_use", length: 1, default: () => "'N'" })
  markerUse: string;

  @Column("char", { name: "buyer_review", length: 1, default: () => "'N'" })
  buyerReview: string;

  @Column("enum", {
    name: "pro_review",
    nullable: true,
    enum: ["", "Y", "A", "N"],
    default: () => "'Y'",
  })
  proReview: "" | "Y" | "A" | "N" | null;

  @Column("varchar", { name: "spam_view", length: 100, default: () => "'N'" })
  spamView: string;

  @Column("enum", {
    name: "reply_view",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  replyView: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "comment_reply",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  commentReply: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "comment_secret",
    enum: ["", "Y", "N", "C"],
    default: () => "'N'",
  })
  commentSecret: "" | "Y" | "N" | "C";

  @Column("enum", {
    name: "comment_list_type",
    enum: ["", "NONE", "ALL", "PAGE"],
    default: () => "'NONE'",
  })
  commentListType: "" | "NONE" | "ALL" | "PAGE";

  @Column("smallint", { name: "comment_list_limit", nullable: true })
  commentListLimit: number | null;

  @Column("enum", {
    name: "comment_recommend",
    enum: ["", "N", "Y"],
    default: () => "'N'",
  })
  commentRecommend: "" | "N" | "Y";

  @Column("enum", {
    name: "comment_cnt_limit",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  commentCntLimit: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "recommend_type",
    nullable: true,
    enum: ["", "NONE", "MEMBER", "ALL"],
    default: () => "'NONE'",
  })
  recommendType: "" | "NONE" | "MEMBER" | "ALL" | null;

  @Column("enum", {
    name: "auto_display",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'Y'",
  })
  autoDisplay: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "orderby",
    nullable: true,
    enum: ["", "ASC", "DESC"],
    default: () => "'ASC'",
  })
  orderby: "" | "ASC" | "DESC" | null;

  @Column("enum", {
    name: "search_id",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  searchId: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "search_product",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  searchProduct: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "sms_status",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  smsStatus: "" | "Y" | "N";

  @Column("varchar", { name: "mail_status", nullable: true, length: 200 })
  mailStatus: string | null;

  @Column("smallint", {
    name: "hits_plus",
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  hitsPlus: number | null;

  @Column("int", { name: "attach_cnt", nullable: true, default: () => "'1'" })
  attachCnt: number | null;

  @Column("enum", {
    name: "attach_security",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  attachSecurity: "" | "Y" | "N";

  @Column("enum", {
    name: "use_subtitle",
    enum: ["Y", "N"],
    default: () => "'N'",
  })
  useSubtitle: "Y" | "N";

  @Column("enum", {
    name: "attendance_gift_type",
    enum: ["", "NONE", "RESERVE", "COUPON", "POINT"],
    default: () => "'RESERVE'",
  })
  attendanceGiftType: "" | "NONE" | "RESERVE" | "COUPON" | "POINT";

  @Column("set", {
    name: "social_scrap_type",
    nullable: true,
    enum: ["CL", "TW", "FB", "M2", "KA", "KS", "URL"],
  })
  socialScrapType: ("CL" | "TW" | "FB" | "M2" | "KA" | "KS" | "URL")[] | null;

  @Column("enum", {
    name: "scrap_use",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  scrapUse: "" | "Y" | "N";

  @Column("mediumtext", { name: "grade_config" })
  gradeConfig: string;

  @Column("enum", {
    name: "use_report",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useReport: "" | "Y" | "N";

  @Column("enum", {
    name: "use_orderlist",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  useOrderlist: "" | "Y" | "N";

  @Column("char", { name: "reply_score", length: 1, default: () => "'N'" })
  replyScore: string;
}
