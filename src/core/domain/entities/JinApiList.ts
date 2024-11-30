import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("jin_api_list", { schema: "makeshop" })
export class JinApiList {
  @PrimaryGeneratedColumn({ type: "int", name: "api_id", unsigned: true })
  apiId: number;

  @Column("varchar", { name: "api_title", nullable: true, length: 100 })
  apiTitle: string | null;

  @Column("mediumtext", { name: "api_desc", nullable: true })
  apiDesc: string | null;

  @Column("varchar", { name: "api_host", nullable: true, length: 255 })
  apiHost: string | null;

  @Column("varchar", { name: "api_src", nullable: true, length: 255 })
  apiSrc: string | null;

  @Column("enum", {
    name: "api_method",
    enum: ["", "GET", "POST"],
    default: () => "'POST'",
  })
  apiMethod: "" | "GET" | "POST";

  @Column("enum", {
    name: "api_ssl",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  apiSsl: "" | "Y" | "N";

  @Column("enum", {
    name: "api_return",
    enum: ["", "json", "html"],
    default: () => "'json'",
  })
  apiReturn: "" | "json" | "html";

  @Column("datetime", {
    name: "api_date",
    nullable: true,
    default: () => "'0000-00-00 00:00:00'",
  })
  apiDate: Date | null;
}
