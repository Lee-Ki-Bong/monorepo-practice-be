import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_du_uid", ["duUid"], {})
@Index("index_id", ["adminuser", "id"], {})
@Entity("dormant_del_user", { schema: "makeshop" })
export class DormantDelUser {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "int", name: "du_uid", unsigned: true })
  duUid: number;

  @Column("varchar", { name: "id", length: 20 })
  id: string;

  @Column("enum", {
    name: "du_del",
    enum: ["", "Y", "N"],
    default: () => "'N'",
  })
  duDel: "" | "Y" | "N";

  @Column("int", { name: "da_uid", unsigned: true, default: () => "'0'" })
  daUid: number;

  @Column("datetime", {
    name: "du_del_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  duDelDate: Date;

  @Column("datetime", {
    name: "du_reg_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  duRegDate: Date;
}
