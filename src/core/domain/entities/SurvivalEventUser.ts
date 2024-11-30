import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_sur_user_idx", ["surUserIdx"], {})
@Index("survival_user", ["adminuser", "surIdx", "surUserid"], {})
@Entity("survival_event_user", { schema: "makeshop" })
export class SurvivalEventUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("smallint", { primary: true, name: "sur_idx", default: () => "'0'" })
  surIdx: number;

  @PrimaryGeneratedColumn({ type: "smallint", name: "sur_user_idx" })
  surUserIdx: number;

  @Column("varchar", { name: "sur_userid", length: 20 })
  surUserid: string;

  @Column("varchar", { name: "sur_item_idxs", length: 100 })
  surItemIdxs: string;

  @Column("varchar", { name: "sur_user_name", length: 100 })
  surUserName: string;

  @Column("varchar", { name: "sur_user_pass", length: 100 })
  surUserPass: string;

  @Column("int", { name: "sur_reserve", default: () => "'0'" })
  surReserve: number;

  @Column("mediumtext", { name: "sur_comment" })
  surComment: string;

  @Column("enum", {
    name: "sur_member",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  surMember: "" | "Y" | "N";

  @Column("datetime", {
    name: "sur_insert_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  surInsertDate: Date;
}
