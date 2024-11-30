import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adm_pvd", ["adminuser", "pilProvider"], {})
@Index("pil_uid", ["pilUid"], {})
@Entity("product_info_list", { schema: "makeshop" })
export class ProductInfoList {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @PrimaryGeneratedColumn({ type: "bigint", name: "pil_uid", unsigned: true })
  pilUid: string;

  @Column("varchar", { name: "pil_provider", length: 12 })
  pilProvider: string;

  @Column("mediumint", {
    name: "pil_key",
    unsigned: true,
    default: () => "'0'",
  })
  pilKey: number;

  @Column("varchar", { name: "pil_title", length: 255 })
  pilTitle: string;

  @Column("datetime", {
    name: "pil_register_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pilRegisterDate: Date;

  @Column("datetime", {
    name: "pil_modify_date",
    default: () => "'0000-00-00 00:00:00'",
  })
  pilModifyDate: Date;

  @Column("varchar", { name: "pil_modify_user", length: 12 })
  pilModifyUser: string;

  @Column("longtext", { name: "pil_contents", nullable: true })
  pilContents: string | null;
}
