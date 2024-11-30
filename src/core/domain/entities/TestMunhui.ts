import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("index_bb", ["bb"], {})
@Entity("test_munhui", { schema: "makeshop" })
export class TestMunhui {
  @Column("varchar", { primary: true, name: "aa", length: 10 })
  aa: string;

  @PrimaryGeneratedColumn({ type: "int", name: "bb" })
  bb: number;
}
