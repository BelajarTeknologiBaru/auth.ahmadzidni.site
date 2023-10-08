const AdvancedSettingsComponnets = () => {
  return (
    <div className=" flex-1 px-3">
      <div className="card  w-full bg-rose-300 shadow-xl mb-2 ">
        <div className="card-body">
          <h2 className="card-title">Hapus Account</h2>
          <p>Hapus Akun Anda dari database disini.</p>

          <div className="card-actions justify-start">
            <button className="btn bg-rose-500 hover:bg-rose-600 border-none text-gray-100">Hapus Akun</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSettingsComponnets;
