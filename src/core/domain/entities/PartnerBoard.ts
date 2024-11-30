import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("board_type", ["adminuser", "boardType"], {})
@Index("idx_auto_uid", ["uid"], {})
@Entity("partner_board", { schema: "makeshop" })
export class PartnerBoard {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("enum", {
    name: "board_type",
    enum: ["", "NOTICE", "STATE"],
    default: () => "'NOTICE'",
  })
  boardType: "" | "NOTICE" | "STATE";

  @Column("varchar", { name: "subject", nullable: true, length: 255 })
  subject: string | null;

  @Column("longtext", { name: "content" })
  content: string;

  @Column("varchar", { name: "partner_list", nullable: true, length: 255 })
  partnerList: string | null;

  @Column("varchar", { name: "attach1", nullable: true, length: 100 })
  attach1: string | null;

  @Column("varchar", { name: "attach2", nullable: true, length: 100 })
  attach2: string | null;

  @Column("varchar", { name: "attach3", nullable: true, length: 100 })
  attach3: string | null;

  @Column("varchar", { name: "attach4", nullable: true, length: 100 })
  attach4: string | null;

  @Column("varchar", { name: "attach5", nullable: true, length: 100 })
  attach5: string | null;

  @Column("varchar", { name: "writer", nullable: true, length: 20 })
  writer: string | null;

  @Column("datetime", {
    name: "regdate",
    default: () => "'0000-00-00 00:00:00'",
  })
  regdate: Date;

  @Column("datetime", {
    name: "moddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  moddate: Date;
}
