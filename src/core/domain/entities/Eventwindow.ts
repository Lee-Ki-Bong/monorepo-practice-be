import { Column, Entity } from "typeorm";

@Entity("eventwindow", { schema: "makeshop" })
export class Eventwindow {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("char", {
    primary: true,
    name: "display",
    length: 2,
    default: () => "'0'",
  })
  display: string;

  @Column("enum", {
    primary: true,
    name: "event_type",
    enum: ["", "PC", "MOBILE"],
    default: () => "'PC'",
  })
  eventType: "" | "PC" | "MOBILE";

  @Column("varchar", { name: "startdate", nullable: true, length: 10 })
  startdate: string | null;

  @Column("varchar", { name: "enddate", nullable: true, length: 10 })
  enddate: string | null;

  @Column("varchar", { name: "display_day", length: 30 })
  displayDay: string;

  @Column("time", { name: "display_start_time", default: () => "'00:00:00'" })
  displayStartTime: string;

  @Column("time", { name: "display_end_time", default: () => "'00:00:00'" })
  displayEndTime: string;

  @Column("mediumtext", { name: "image", nullable: true })
  image: string | null;

  @Column("varchar", { name: "align", nullable: true, length: 10 })
  align: string | null;

  @Column("varchar", { name: "title", nullable: true, length: 100 })
  title: string | null;

  @Column("mediumtext", { name: "content", nullable: true })
  content: string | null;

  @Column("enum", {
    name: "maintype",
    nullable: true,
    enum: ["", "Y", "N", "A", "C", "X", "T", "V"],
    default: () => "'Y'",
  })
  maintype: "" | "Y" | "N" | "A" | "C" | "X" | "T" | "V" | null;

  @Column("mediumtext", { name: "brand_uid", nullable: true })
  brandUid: string | null;

  @Column("char", { name: "type", length: 1, default: () => "'0'" })
  type: string;

  @Column("int", { name: "time", nullable: true, default: () => "'0'" })
  time: number | null;

  @Column("int", { name: "opacity", nullable: true, default: () => "'0'" })
  opacity: number | null;

  @Column("int", { name: "xsize", default: () => "'420'" })
  xsize: number;

  @Column("int", { name: "ysize", default: () => "'400'" })
  ysize: number;

  @Column("int", { name: "max_width", default: () => "'350'" })
  maxWidth: number;

  @Column("int", { name: "toxsize", nullable: true, default: () => "'0'" })
  toxsize: number | null;

  @Column("int", { name: "toysize", nullable: true, default: () => "'0'" })
  toysize: number | null;

  @Column("char", { name: "oneframe", length: 1, default: () => "'0'" })
  oneframe: string;

  @Column("enum", {
    name: "oneframe_detail_type",
    enum: ["", "FULL", "BOTTOM"],
    default: () => "'BOTTOM'",
  })
  oneframeDetailType: "" | "FULL" | "BOTTOM";

  @Column("char", {
    name: "scroll",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  scroll: string | null;

  @Column("enum", {
    name: "drag",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  drag: "" | "Y" | "N" | null;

  @Column("char", {
    name: "cookietime",
    nullable: true,
    length: 1,
    default: () => "'2'",
  })
  cookietime: string | null;

  @Column("mediumtext", { name: "link", nullable: true })
  link: string | null;

  @Column("mediumtext", { name: "link_target", nullable: true })
  linkTarget: string | null;

  @Column("enum", {
    name: "link_window",
    enum: ["", "CLOSE", "OPEN"],
    default: () => "'CLOSE'",
  })
  linkWindow: "" | "CLOSE" | "OPEN";

  @Column("enum", {
    name: "position",
    enum: ["", "B", "M"],
    default: () => "'B'",
  })
  position: "" | "B" | "M";

  @Column("int", { name: "event_design_id", default: () => "'0'" })
  eventDesignId: number;

  @Column("enum", {
    name: "show_board",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  showBoard: "" | "Y" | "N" | null;

  @Column("enum", {
    name: "show_again",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  showAgain: "" | "Y" | "N";

  @Column("enum", {
    name: "image_swipe",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  imageSwipe: "" | "Y" | "N" | null;

  @Column("int", {
    name: "image_slide_term",
    nullable: true,
    default: () => "'2500'",
  })
  imageSlideTerm: number | null;

  @Column("enum", {
    name: "image_slide",
    nullable: true,
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  imageSlide: "" | "Y" | "N" | null;
}
