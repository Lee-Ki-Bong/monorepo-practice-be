import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_auto_p_id", ["pId"], {})
@Entity("neodesign_tag_parameter", { schema: "makeshop" })
export class NeodesignTagParameter {
  @Column("int", {
    primary: true,
    name: "tag_id",
    unsigned: true,
    default: () => "'0'",
  })
  tagId: number;

  @Column("int", {
    primary: true,
    name: "tl_uid",
    unsigned: true,
    default: () => "'0'",
  })
  tlUid: number;

  @PrimaryGeneratedColumn({ type: "int", name: "p_id", unsigned: true })
  pId: number;

  @Column("varchar", { name: "p_name", length: 50 })
  pName: string;

  @Column("varchar", { name: "p_default", nullable: true, length: 50 })
  pDefault: string | null;
}
