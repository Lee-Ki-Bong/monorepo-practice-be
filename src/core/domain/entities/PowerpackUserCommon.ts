import { Column, Entity } from "typeorm";

@Entity("powerpack_user_common", { schema: "makeshop" })
export class PowerpackUserCommon {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "dgnset_id",
    unsigned: true,
    default: () => "'0'",
  })
  dgnsetId: number;

  @Column("mediumtext", { name: "common_layout", nullable: true })
  commonLayout: string | null;

  @Column("mediumtext", { name: "common_text_config", nullable: true })
  commonTextConfig: string | null;

  @Column("mediumtext", { name: "common_icon_config", nullable: true })
  commonIconConfig: string | null;

  @Column("longtext", { name: "common_css", nullable: true })
  commonCss: string | null;
}
