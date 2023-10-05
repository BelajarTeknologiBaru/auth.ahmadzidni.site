import Image from "next/image";

const KananSidebar = ({ session }) => {
  return (
    <div className=" flex-1 ">
      <div className="card  w-full bg-base-100 shadow-xl image-full mb-2">
        <div className="card-body">
          <h2 className="card-title">Avatar</h2>
          <p>Ganti Avatar disini.</p>
          <div className="card-actions justify-start">
            <div className="avatar">
              <div className="w-24 rounded-full">{session && <Image width={48} height={48} src={session?.user.image} />}</div>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="card  w-full bg-base-100 shadow-xl image-full">
        <div className="card-body">
          <h2 className="card-title">Nama</h2>
          <p>Ganti nama pengguna anda disini.</p>
          <div className="card-actions justify-start ">
            <div className="form-control">
              <label className="input-group">
                <input value={session?.user.name} type="text" className="input input-bordered text-black" />
                <span className="btn btn-primary">Ganti</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KananSidebar;
