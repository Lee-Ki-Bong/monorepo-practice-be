import { Column, Entity, Index } from "typeorm";

@Index("add_type", ["adminuser", "addType"], {})
@Index("dgnbn_id", ["adminuser", "dgnbnId"], {})
@Entity("neodesign_banner_addinfo", { schema: "makeshop" })
export class NeodesignBannerAddinfo {
  @Column("varchar", { primary: true, name: "adminuser", length: 12 })
  adminuser: string;

  @Column("int", {
    primary: true,
    name: "dgnbn_id",
    unsigned: true,
    default: () => "'0'",
  })
  dgnbnId: number;

  @Column("varchar", { primary: true, name: "display_device", length: 10 })
  displayDevice: string;

  @Column("varchar", { primary: true, name: "add_type", length: 20 })
  addType: string;

  @Column("mediumtext", { name: "add_value", nullable: true })
  addValue: string | null;
}
