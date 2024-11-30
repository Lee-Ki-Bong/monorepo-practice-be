import { Column, Entity } from "typeorm";

@Entity("box_ad", { schema: "makeshop" })
export class BoxAd {
  @Column("varchar", { primary: true, name: "date", length: 12 })
  date: string;

  @Column("enum", {
    primary: true,
    name: "type",
    enum: ["", "NAVER", "DAUM", "DAUMM", "ZUM"],
    default: () => "'NAVER'",
  })
  type: "" | "NAVER" | "DAUM" | "DAUMM" | "ZUM";

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("mediumtext", { name: "url", nullable: true })
  url: string | null;

  @Column("varchar", { name: "image", nullable: true, length: 255 })
  image: string | null;

  @Column("int", { primary: true, name: "num", default: () => "'0'" })
  num: number;

  @Column("varchar", { name: "sub", nullable: true, length: 255 })
  sub: string | null;

  @Column("varchar", { name: "cate", nullable: true, length: 255 })
  cate: string | null;

  @Column("mediumtext", { name: "memo", nullable: true })
  memo: string | null;
}
