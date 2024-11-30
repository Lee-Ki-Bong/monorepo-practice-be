import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("adminuser_index", ["adminuser"], {})
@Entity("program_count", { schema: "makeshop" })
export class ProgramCount {
  @PrimaryGeneratedColumn({ type: "int", name: "uid", unsigned: true })
  uid: number;

  @Column("varchar", { name: "adminuser", length: 20 })
  adminuser: string;

  @Column("varchar", { name: "program_key", length: 50 })
  programKey: string;

  @Column("varchar", {
    name: "program_target",
    length: 5,
    default: () => "'PRD'",
  })
  programTarget: string;

  @Column("varchar", {
    name: "field_key",
    length: 10,
    default: () => "'cnt_view'",
  })
  fieldKey: string;

  @Column("int", { name: "view_count", default: () => "'1'" })
  viewCount: number;
}
