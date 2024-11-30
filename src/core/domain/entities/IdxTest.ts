import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("txt_char", ["txtChar"], {})
@Index("uid_txt", ["idxUid", "txtChar"], {})
@Entity("idx_test", { schema: "makeshop" })
export class IdxTest {
  @PrimaryGeneratedColumn({ type: "int", name: "idx_uid", unsigned: true })
  idxUid: number;

  @Column("varchar", { name: "txt_char", length: 10 })
  txtChar: string;
}
